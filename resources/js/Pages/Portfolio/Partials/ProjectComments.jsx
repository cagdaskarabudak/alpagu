import { useEffect, useState } from "react";

export default function ProjectComments({comments}){
    const [commentDoms, setCommentDoms] = useState();

    useEffect(() => {
        const commentElements = comments.map((comment, index) => (
            <div className="comment" key={index}>
                <div className="header">
                    <div className="name">{comment.name}</div>
                    <div className="rate">{comment.rate}</div>
                </div>
                <div className="content">{comment.content}</div>
                <div className="footer">
                    <div className="date">{comment.created_at}</div>
                </div>
            </div>
        ));

        setCommentDoms(commentElements);
    }, []);

    return (
        <div class={'comment-list'}>
            {commentDoms}
        </div>
    );
}