import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';
// import { useState } from 'react';

export default function Login({ }) {

    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();

        const data = {
            username,
            password,
        };

        try {
            const response = await api.post('auth/signin', data);
            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.token);

            navigate('/books');

        } catch (err) {
            alert('Falha no login, tente novamente!');
        }

    };



    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt='logo' />

                <form onSubmit={login}>
                    <h1>
                        Access your account
                    </h1>
                    <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder='password' value={password} onChange={e => setpassword(e.target.value)} />
                    <button className='button' type='submit'>Login</button>
                </form>

            </section>


            <img src={padlock} alt='login img' />


        </div>
    )
}