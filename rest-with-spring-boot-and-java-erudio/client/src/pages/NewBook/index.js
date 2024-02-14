import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';


import './styles.css';


import logoImage from '../../assets/logo.svg';

export default function NewBook() {


    const [id, setid] = useState('');
    const [author, setauthor] = useState('');
    const [launchDate, setlaunchDate] = useState('');
    const [price, setprice] = useState('');
    const [title, settitle] = useState('');

    const usernane = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    async function createNewBook(e) {
        e.preventDefault();

        const data = {
            title,
            author,
            launchDate,
            price
        }

        const authorization = {
            Authorization: `Bearer ${accessToken}`
        }


        try {

            await api.post('api/book/v1', data,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            navigate('/books');

        } catch (err) {
            alert('Erro ao gravar livro, tente novamente!');
        }
    }



    return (
        <div className="new-book-container">
            <div className='content'>
                <section className='form'>
                    <img src={logoImage} alt="logotipo" />
                    <h1>Add new book</h1>
                    <p>Enter new book informations</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color='#251fc5' />
                        Home
                    </Link>


                </section>


                <form onSubmit={createNewBook}>

                    <input
                        placeholder='Title'
                        value={title}
                        onChange={e => settitle(e.target.value)}
                    />
                    <input
                        placeholder='Author'
                        value={author}
                        onChange={e => setauthor(e.target.value)}
                    />
                    <input
                        type='date'
                        value={launchDate}
                        onChange={e => setlaunchDate(e.target.value)}
                    />
                    <input
                        placeholder='Price'
                        value={price}
                        onChange={e => setprice(e.target.value)}
                    />

                    <button className='button' type='submit'>Add</button>
                </form>

            </div>
        </div>


    );
}