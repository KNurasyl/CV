import React, { useState } from "react";
import Spinner from "../components/UI/Spinner/Spinner";
import { Modal } from "../components/UI/Modal/Modal";
import { FullPost } from "../components/FullPost/FullPost";
import { Comment } from "../components/Comment/Comment";


export const ReadFullPost = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [modalState, setModalState] = useState<boolean>(false);
    const [comments, setComments] = useState<any>([]);

    const [state, setState] = useState({
        author: '',
        comment: ''
    });

    const inputChangeHandler = (e: any) => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();
        
    };

    const deleteHandler = async (id: string) => {
        
    };

    return (
        isLoading
        ?
        <Spinner/>
        :
        <>
            <Modal show={modalState} closed={() => {}}>
                <h2>Нужно заполнить комментарий</h2>
            </Modal>
            <FullPost
                title={'postId.title'}
                date={'postId.date'}
                content={'postId.content'}
                authorValue={state.author}
                commentValue={state.comment}
                inputChangeHandler={inputChangeHandler}
                submitHandler={submitHandler}
            >
                {
                    comments.map((comment: any) => {
                        return (
                            <Comment
                                key={comment._id}
                                author={comment.author}
                                comment={comment.comment}
                                onClick={() => deleteHandler(comment._id)}
                            />
                        )
                    })
                }
            </FullPost>
        </>
    );
};