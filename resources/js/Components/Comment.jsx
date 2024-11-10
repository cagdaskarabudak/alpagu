import Rating from "./Rating"
import { useEffect, useRef, useState } from "react";
import { useForm, usePage, router} from "@inertiajs/react";

export default function Comment({comment, commentDataType, commentData}){
    const [replyDom, setReplyDom] = useState(false);
    const replyButton = useRef();

    const toggleReplyDom = () => {
        setReplyDom(!replyDom);
    }

    useEffect(() => {
        if(replyDom == true){
            if(replyButton.current){
                replyButton.current.innerHTML = "Vazgeç";
                replyButton.current.classList.remove('link-success');
                replyButton.current.classList.add('link-danger');
            }
        }
        else if(replyDom == false){
            if(replyButton.current){
                replyButton.current.innerHTML = "Yanıtla";
                replyButton.current.classList.remove('link-danger');
                replyButton.current.classList.add('link-success');
                replyFormReset();
            }
        }
    }, [replyDom]);

    const { 
        data: replyForm, 
        setData: setReplyForm,
        reset: replyFormReset,
    } =
    useForm({
        user_id: usePage().props.auth.user ? usePage().props.auth.user.id : 0,
        name: usePage().props.auth.user ? usePage().props.auth.user.name : '',
        email: usePage().props.auth.user ? usePage().props.auth.user.email : '',
        message: '',
        rate: 0,
        type: commentDataType,
        data_id:  commentData.id,
        reply_comment_id: comment.id,
    });

    const replyFormSubmit = async (e) => {
        e.preventDefault();
        console.log(replyForm);
        let commentResponse = await axios.post(route('comment.reply.create'), replyForm);
        console.log('response: ', commentResponse);
        if(commentResponse.data.status == true){
            replyFormReset();
            if(commentDataType == 'project'){
                    router.visit(route('project.view', [commentData.slug, commentData.id]), { preserveScroll: true });
            }
            else if(commentDataType == 'article'){
                router.visit(route('article', [commentData.slug, commentData.id]), { preserveScroll: true });
            }
        }
    }

    return (
        <div className="comment">
            <div className="header">
                <div className="name">
                    {comment.name}
                    {
                        comment.user_id != null &&
                        <div className={"role"} style={{color: comment.user.role.color}}>{comment.user.role.name}</div>
                    }
                    <div className="date">{new Date(comment.created_at).toLocaleDateString()}</div>
                </div>
                    {
                        comment.rate != null &&
                        <div className="rate">
                            <span className="rate-amount">{comment.rate}</span>
                            <Rating starCount={5} rate={comment.rate} starSize={12}></Rating>
                        </div>
                    }
            </div>
            <div className="content">{comment.content}</div>
            <span style={{cursor: 'pointer'}} className="link-success comment-reply-button" onClick={toggleReplyDom} ref={replyButton}>Yanıtla</span>
            {
                replyDom &&
                <form className="reply-form row mt-3" onSubmit={replyFormSubmit}>
                    <div className="name col-lg-4 mb-3">
                        <input type="text" placeholder="İsim" className="form-control" value={replyForm.name} onChange={(e) => {setReplyForm('name', e.target.value)}} />
                    </div>
                    <div className="email col-lg-4 mb-3">
                        <input type="text" placeholder="Email" className="form-control" value={replyForm.email} onChange={(e) => {setReplyForm('email', e.target.value)}} />
                    </div>
                    <div className="message col-lg-8 mb-3">
                        <textarea className="form-control" placeholder="Yorum Yaz" onChange={(e) => {setReplyForm('message', e.target.value)}} value={replyForm.message}></textarea>
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-outline-success">Yorum Gönder</button>
                    </div>
                </form>
            }
    </div>
    )
}