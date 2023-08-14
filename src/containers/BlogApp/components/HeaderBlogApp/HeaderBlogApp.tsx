import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


export const HeaderBlogApp = () => {
    return (
        <header className="header">
            <nav>
                <Navigation to={'/'} end>
                    <FontAwesomeIcon icon={faNewspaper} color='white' size="3x" />
                </Navigation>
            </nav>
        </header>
    );
};