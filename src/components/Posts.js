import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseURL } from '../api/PostApi';

function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const fetchPost = () => {
        try {
            setLoading(true)
            axios.get(baseURL).then((response) => {
                setPosts(response.data);
                setLoading(false)
            });
        } catch (err) {
            console.log(err)
            setError("Can't Fetch Posts")
        }
    }
    useEffect(() => {
        fetchPost();
    }, [])
    console.log(posts)
    if (!posts) return (
        <div>
            {error}
        </div>
    )
    return (
        <div>
            <h1 style={{ color: "black" }}>Posts:</h1>
            {loading ?
                <div>
                    <p style={{ fontSize: "70px" }}>Loading ......</p>
                </div>
                :
                <div className='grid-container'>
                    {posts?.map(post => (
                        <div className="card-category-1" key={post.id}>

                            <div className="basic-card basic-card-aqua">
                                <div className="card-content">
                                    <span className="card-title">{post.title}</span>
                                    <p className="card-text">
                                        {post.body}
                                    </p>
                                </div>


                            </div>
                        </div>

                    ))}

                </div>
            }</div>
    )
}

export default Posts