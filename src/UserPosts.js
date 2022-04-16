
import { useState, useEffect } from "react"

export default function UserPosts(props) {
    
    const { username, id } = props.user
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [username, id])

    const postElements = posts.map(post => {
        return (
            <div>
                <h1>{post.title}</h1>
                <p>by {username}</p>
                <p>{post.body}</p>
            </div>
        )
    })

    return postElements
}
