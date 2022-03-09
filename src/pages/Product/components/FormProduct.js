import React from 'react'

function FormProduct() {
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
                    onChange={() => console.log('admin123')}
                />
            </div>
        </>
    )
}

export default FormProduct