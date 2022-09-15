import React, { useEffect, useState } from 'react'
import { LoginContext } from '../context/LoginContext';
import Login from './auth/Login';
import Navbar from './Navbar';
import Posts from './Posts';

function Home() {
    const [firstName, setFirstName] = useState()
    useEffect(() => {
        const firstname = JSON.parse(localStorage.getItem('firstName'));
        if (firstname) {
            setFirstName(firstname);
        }
    }, []);
    return (
        <LoginContext.Provider value={{ firstName, setFirstName }} >
            <Navbar />
            {firstName ?
                <Posts />
                :
                <div>
                    <Login />
                </div>
            }




        </LoginContext.Provider>
    )
}

export default Home