import { useState, useRef, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function LiveChat(){
    const chat_status = usePage().props.auth.chat;

    if(chat_status){
        const livechatbody = useRef();

        const {
            data: firstMessageForm,
            setData: setFirstMessage,
            errors: firstMessageErrors,
            post: firstMessagePost,
            reset: firstMessageReset,
            processing: firstMessageProcessing,
            recentlySuccessful: firstMessageRecentlySuccessful,
        } = useForm({
            name: '',
            email: '',
            message: '',
        });
    
        const {
            data: sendMessageForm,
            setData: setSendMessage,
            errors: sendMessageErrors,
            post: sendMessagePost,
            reset: sendMessageReset,
            processing: sendMessageProcessing,
            recentlySuccessful: sendMessageRecentlySuccessful,
        } = useForm({
            message: '',
        });
    
        const sendFirstMessage = async (e) => {
            e.preventDefault();
    
            let firstmessage = await axios.post(route('message.first'), firstMessageForm);
    
            if(firstmessage.data.status == true){
                setChatUser(firstmessage.data);
                appendMessage({
                    sender: 'me',
                    message: firstmessage.data.message,
                });
            }
        };
    
        const [messages, setMessages] = useState([]); // messages'i burada state olarak tanımlıyoruz
    
        const appendMessage = (message) => {
            setMessages(prevMessages => [
                ...prevMessages,
                <div key={prevMessages.length + 1} className='my-message'>
                    <div className="message">
                        {message.message}
                    </div>
                </div>
            ]);
        };
    
        useEffect(() => {
            if (livechatbody.current) {
                livechatbody.current.scrollTop = livechatbody.current.scrollHeight;
            }
        }, [messages]);
    
        const sendMessage = async (e) => {
            e.preventDefault();
        
            let sender = await axios.post(route('message.send'), sendMessageForm);
        
            console.log(sender.data);
        
            if (sender.data.status === true) {
                sendMessageReset();
                appendMessage({
                    sender: 'me',
                    message: sender.data.message,
                });
            }
        };
    
        const [chatUser, setChatUser] = useState({status: false});
    
        const [livechat, setLiveChat] = useState(false);
    
        const toggleLiveChat = () => {
            setLiveChat(!livechat);
        };
    
        const terminateChat = () => {
            setChatUser({status: false});
            setMessages([]);
            firstMessageReset();
            sendMessageReset();
        }
    
    
        return (
            <div className={"live-chat"+(livechat ? ' show' : '')}>
                <button className="live-chat-toggler" onClick={toggleLiveChat}><i className="live-chat-icon fa-solid fa-message"></i>Live Chat</button>
                <div className="live-chat-body" ref={livechatbody}>
                    {
                        messages.length > 0 ? (
                            <button className="terminate-chat-button" onClick={terminateChat}><i className="fa-solid fa-x"></i></button>
                        ) : ''
                    }
                    {
                        chatUser.status == false ? (
                            <form onSubmit={sendFirstMessage}>
                                <p>Konuşma başlatmak için ilk mesajı atın.</p>
                                <div className="mb-3">
                                    <label htmlFor="name" className='form-label'>İsim</label>
                                    <input type="text" name='name' className='form-control' value={firstMessageForm.name} 
                                    onChange={(e) =>
                                        setFirstMessage('name', e.target.value)
                                    } required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className='form-label'>E-Posta</label>
                                    <input type="email" name='email' className='form-control' value={firstMessageForm.email} 
                                    onChange={(e) =>
                                        setFirstMessage('email', e.target.value)
                                    } required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="first_message" className='form-label'>Mesaj</label>
                                    <textarea type="email" id='first_message' name='first_message' className='form-control' value={firstMessageForm.message} 
                                    onChange={(e) =>
                                        setFirstMessage('message', e.target.value)
                                    } required></textarea>
                                </div>
                                <div className="mb-3">
                                    <button disabled={firstMessageProcessing} className='btn btn-success'>Gönder</button>
                                </div>
                            </form>
                        ) : (
                            <>
                                <div className="chat">
                                    {messages}
                                </div>
                                <form className="input-area" onSubmit={sendMessage}>
                                    <textarea name="send_message" id="send_message" value={sendMessageForm.message} onChange={(e) => {
                                        setSendMessage('message', e.target.value)
                                    }} required></textarea>
                                    <button className={'btn btn-success'}>Gönder</button>
                                </form>
                            </>
                        )
                    }
                </div>
            </div>
        );
    }
    else{
        return ('');
    }

}