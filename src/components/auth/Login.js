import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useContext } from "react"
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from "react-router-dom"
function Login() {
    let navigate = useNavigate()
    const { setFirstName } = useContext(LoginContext)
    const { firstName } = useContext(LoginContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        setFirstName(data.firstName)
        localStorage.setItem('firstName', JSON.stringify(data.firstName))

    };
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input
                    {...register(`firstName`, {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
                />
                {errors.firstName?.type === 'required' && <p className='error'>First name is required</p>}
                {errors?.firstName?.type === "maxLength" && (
                    <p className='error'>First name cannot exceed 20 characters</p>
                )}
                {errors?.firstName?.type === "pattern" && (
                    <p className='error'>Alphabetical characters only</p>
                )}
                <label>Laste Name</label>
                <input {...register("lastName", {
                    required: true, maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                })} />
                {errors.lastName && <p className='error'>Last name is required</p>}
                {errors?.lastName?.type === "maxLength" && (
                    <p className='error' >last name cannot exceed 20 characters</p>
                )}
                {errors?.lastName?.type === "pattern" && (
                    <p className='error'>Alphabetical characters only</p>
                )}
                <input type="submit" value='login' />
            </form>

        </div>
    )
}

export default Login