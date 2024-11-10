import { useEffect, useState } from "react";
import Rating from "@/Components/Rating";
import Comment from "./Comment";

export default function Comments({commentGroup, commentDataType, commentData}){
    const [commentDoms, setCommentDoms] = useState([]);
    useEffect(() => {
        let commentElements = commentGroup.map((comment, index) => (
            <Comment comment={comment} commentDataType={commentDataType} commentData={commentData} key={index} />
        ));

        setCommentDoms(commentElements);
    }, []);

    return (
        <div className={'comment-group'}>
            {commentDoms}
        </div>
    );
}