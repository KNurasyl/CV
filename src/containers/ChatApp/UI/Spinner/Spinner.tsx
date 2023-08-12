import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { Backdrop } from "../Backdrop/Backdrop";
import './Spinner.css';


const Spinner = () => {
    return (
        <div className="spinner_block">
            <Backdrop show={true}/>
            <FontAwesomeIcon className="spinner" icon={faStroopwafel} color='red' size="10x" spin />
        </div>
    );
};

export default Spinner;