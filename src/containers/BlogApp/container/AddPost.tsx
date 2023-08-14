import React, { useState } from "react";
import { Modal } from "../components/UI/Modal/Modal";
import { AddForm } from "../components/Form/Form";


export const AddPost = () => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [state, setState] = useState<any>({
        title: '',
        content: '',
        image: ''
    });

    const inputChangeHandler = (e: any) => {
        const {name, value} = e.target;
        setState((prevState: any) => ({...prevState, [name]: value}));
    };

    const fileChangeHandler = (e: any) => {
        const {name} = e.target;
        const file = e.target.files[0];

        setState((prevState: any) => ({
            ...prevState,
            [name]: file
        }));
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();

    };

    return (
        <>
        <Modal show={modalState} closed={() => {}}>
            <h2>Надо заполнить все поля</h2>
        </Modal>
        <AddForm
            onSubmit={submitHandler}
            titleValue={state.title}
            contentValue={state.content}
            image={state.image}
            titleChange={inputChangeHandler}
            contentChange={inputChangeHandler}
            imageChange={fileChangeHandler}
        />
    </>
    );
};