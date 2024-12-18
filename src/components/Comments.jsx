import React from "react";
import Comment from "./Comment";


export default function Comments(props) {

    const comments = props.data ? props.data.map(comment => <Comment comment={comment.body} />) : null;

    return (
        <div className="comments">
            <p>Comments:</p>
            {comments}
        </div>
    )
}