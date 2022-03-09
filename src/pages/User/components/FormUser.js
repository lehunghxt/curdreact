import React from 'react'

function FormUser() {
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input type="password" className="form-control" id="username" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input type="email" className="form-control" id="email" placeholder="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="street">street</label>
                    <input type="text" className="form-control" id="street" placeholder="street" />
                </div>
                <div className="form-group">
                    <label htmlFor="suite">suite</label>
                    <input type="text" className="form-control" id="suite" placeholder="suite" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">city</label>
                    <input type="text" className="form-control" id="city" placeholder="city" />
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">zipcode</label>
                    <input type="text" className="form-control" id="zipcode" placeholder="zipcode" />
                </div>
                <div className="form-group">
                    <label htmlFor="lat">lat</label>
                    <input type="text" className="form-control" id="lat" placeholder="lat" />
                </div>
                <div className="form-group">
                    <label htmlFor="lng">lng</label>
                    <input type="text" className="form-control" id="lng" placeholder="lng" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default FormUser