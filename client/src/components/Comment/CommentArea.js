import React from 'react';
import CommentUpload from './CommentUpload';
import CommentList from './CommentList';

const CommentArea = (props) => {
    return (
        <div>
            <CommentUpload postId={props.postId} />
            <CommentList />
        </div>
    );
};

export default CommentArea;