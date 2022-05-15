import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Header() {
    const [show, setShow] = useState(true);
    const showClass = show ? `d-flex text-center` : `d-none`;

    const getWindowSize = () => (window.innerWidth <= 768) ? setShow(false) : setShow(true);

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);
        getWindowSize();
    }, []);

    return (
        <header className='header'>
            <nav className='container d-flex align-items-center justify-content-center py-3 nav'>
                <NavLink to='/' className='mobile-nav'>
                    <img/>
                </NavLink>
                <div className={`menu ${showClass}`}>
                    <NavLink to='/' exact>
                        Home
                    </NavLink>
                    <NavLink to='/'>
                        Hotels
                    </NavLink>
                    <NavLink to='/'>
                        <img />
                    </NavLink>
                    <NavLink to='/'>
                        Contact
                    </NavLink>
                </div>
                <div className='mobile-nav' onClick={() => setShow(!show)}>
                    <button className='navbar-toggle'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
