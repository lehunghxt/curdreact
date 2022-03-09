import React from 'react'
import { Link } from 'react-router-dom'
import route from '../pages/route'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={'/'}>CURD</Link >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            route.map(({ path, name }) =>
                                <li key={path} className={`nav-item ${pathname === path ? 'active' : ''}`}>
                                    <Link className='nav-link' to={path} key={path}>{name}</Link>
                                </li>
                            )
                        }
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 input-sm" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </>
    )
}

export default Navbar