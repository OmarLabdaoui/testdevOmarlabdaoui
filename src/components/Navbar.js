import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { LoginContext } from '../context/LoginContext'

function Navbar() {
    const { firstName } = useContext(LoginContext)
    const { setFirstName } = useContext(LoginContext)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("firstName")
        setFirstName("")
        navigate("/login")

    }
    return (
        <div className='navbar'>
            <div className='header'>
                <div className='header__left'>
                    Navbar
                </div>
                <div className='header__right'>
                    <p><NavLink to="/" className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }>Home</NavLink></p>
                    {firstName ?
                        <div style={{ display: "flex" }}>
                            <p ><NavLink to="/posts" className={({ isActive }) =>
                                isActive ? "link-active" : "link-inactive"
                            }>Posts</NavLink></p>
                            <p onClick={() => logout()} style={{ marginLeft: "10Px" }}>logout</p>
                        </div>

                        :
                        <p ><NavLink to="/login" className={({ isActive }) =>
                            isActive ? "link-active" : "link-inactive"
                        }>Login</NavLink></p>
                    }

                </div>
            </div>


        </div >
    )
}

export default Navbar