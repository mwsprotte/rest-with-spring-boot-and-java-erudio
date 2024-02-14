import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImage from '../../assets/logo.svg';


export default function Books() {
    return (

        <div className="book-container">
            <header>
                <img src={logoImage} alt="logo" />
                <span>Wellcome, <strong>Matheus</strong>!</span>
                <Link className="button" to="../book/new">Add new book</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5"></FiPower>
                </button>
            </header>

            <h1>Registred Books</h1>

            <ul>
                <li>
                    <strong>Title:</strong>
                    <p>Oi putinha</p>
                    <strong>Author:</strong>
                    <p>MWS</p>
                    <strong>Price:</strong>
                    <p>999</p>
                    <strong>Relase date:</strong>
                    <p>01/01/2024</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FCs"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FCs"/>
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Oi putinha</p>
                    <strong>Author:</strong>
                    <p>MWS</p>
                    <strong>Price:</strong>
                    <p>999</p>
                    <strong>Relase date:</strong>
                    <p>01/01/2024</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FCs"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FCs"/>
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Oi putinha</p>
                    <strong>Author:</strong>
                    <p>MWS</p>
                    <strong>Price:</strong>
                    <p>999</p>
                    <strong>Relase date:</strong>
                    <p>01/01/2024</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FCs"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FCs"/>
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Oi putinha</p>
                    <strong>Author:</strong>
                    <p>MWS</p>
                    <strong>Price:</strong>
                    <p>999</p>
                    <strong>Relase date:</strong>
                    <p>01/01/2024</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FCs"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FCs"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}