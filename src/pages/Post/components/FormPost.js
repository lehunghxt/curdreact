import React, { useEffect, useState } from 'react'
const posts = require('../posts.json')

function FormPost(props) {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    useEffect(() => {
        const { idPost } = props;
        if (idPost) {
            const findedPost = posts.find(e => e.id === idPost);
            setPost(findedPost);
        } else {
            setPost({
                title: '',
                body: ''
            });
        }
    }, [])


    return (
        <>
            <div className="form-group">
                <label htmlFor="Title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="Title"
                    aria-describedby="Title"
                    placeholder="Enter Title"
                    value={post.title}
                    onChange={() => console.log('admin123')}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Content">Content</label>
                <textarea
                    id="Content"
                    name='Content'
                    className='form-control'
                    value={post.body}
                    onChange={() => console.log('admin123')}
                    rows='10'
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Thêm bài viết</button>
        </>
    )
}

export default FormPost