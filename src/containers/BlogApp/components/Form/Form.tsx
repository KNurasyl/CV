import React, { ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faFloppyDisk  } from '@fortawesome/free-solid-svg-icons';
import './Form.css';

interface AddFormProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    image: File | null;
    imageChange: (event: ChangeEvent<HTMLInputElement>) => void;
    titleValue: string;
    titleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    contentValue: string;
    contentChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const AddForm: React.FC<AddFormProps> = ({ onSubmit, image, imageChange, titleValue, titleChange, contentValue, contentChange }) => {
    return (
        <form onSubmit={onSubmit} className="form_blogApp">
            <div className="form_blogApp-bg"></div>
            <h3>Add new post</h3>
            <input 
                type="text" 
                name="title" 
                placeholder="Title"
                value={titleValue}
                onChange={titleChange}
            />
            <textarea 
                name="content" 
                placeholder="Content"
                value={contentValue}
                onChange={contentChange}
            />
            <label>
                <FontAwesomeIcon 
                    icon={faImage} 
                    style={{cursor: 'pointer'}} 
                    color={image ? 'lawngreen' : 'white'} 
                    size="4x" 
                />
                <p className="img-name">{image ? image.name : 'Choose file'}</p>
                <input 
                    name={'image'} 
                    onChange={imageChange}
                    hidden 
                    accept="image/*" 
                    type="file" 
                />
            </label>
            <button type="submit">
                <FontAwesomeIcon 
                    icon={faFloppyDisk} 
                    color={'white'} 
                    size="5x" 
                />
            </button>
        </form>
    );
};