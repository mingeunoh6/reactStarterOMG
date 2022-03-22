import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';



const CommentContent = (props) => {
    const user = useSelector((state) => state.user)
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalFlag, setModalFlag] = useState(false)

    useOnClickOutside(ref, () => setModalFlag(false));
    return (
        <div>
            <div>{props.author.displayName}</div>

            {props.author.uid === user.uid && (
                <div>
                    <span onClick={() => setModalFlag(true)}>...</span>
                    {modalFlag && (
                        <div ref={ref}>
                            <div>delete</div>
                            <div>edit</div>
                        </div>
                    )}
                </div>)}

            <div>{props.comment}</div>



        </div>
    );
};




// Hook
function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {

                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },

        [ref, handler]
    );
}

export default CommentContent;