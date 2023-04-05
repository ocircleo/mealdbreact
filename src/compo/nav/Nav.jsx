import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='sticky top-0 h-16 z-10 w-full bg-black font-bold  flex items-center gap-5 px-10 capitalize'>
            <Link className='cursor-pointer hover:text-red-500 text-white' to={'/'}>home</Link>
            <Link className='cursor-pointer hover:text-red-500 text-white' to={'/contact'}> contact</Link>
        </nav>
    );
};

export default Nav;