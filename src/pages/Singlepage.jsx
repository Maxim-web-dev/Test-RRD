import { useParams, Link, useNavigate, useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Singlepage = () => {
    const {post, id} = useLoaderData()
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </div>
    )
}

const postLoader = async({ params }) => {
    const id = params.id

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const post = await res.json()

    return {post, id}
} 

export {Singlepage, postLoader}