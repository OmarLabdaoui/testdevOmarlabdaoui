import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { LoginContext } from '../context/LoginContext'

function Navbar() {
    const { firstName } = useContext(LoginContext)
    const { setFirstName } = useContext(LoginContext)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("firstName")
        setFirstName("")
        navigate("/")

    }
    return (
        <div className='navbar'>
            {firstName ?
                <button className='logout' onClick={() => logout()}>Logout</button>
                :
                <div>
                    Navbar
                </div>
            }

        </div>
    )
}

export default Navbar