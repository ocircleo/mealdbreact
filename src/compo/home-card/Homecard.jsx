import React from 'react';
import { Link } from 'react-router-dom';

const Homecard = ({ meal }) => {
    let { id, index, name, picture, about } = meal
    return (
        <div className='h-96 z-0 w-full border p-5 mt-5 flex flex-col justify-between'>
            <img src={picture} className='h-40 w-fit mx-auto' />
            <h2 className=' text-2xl '>catagory: {name}</h2>
            <div className='text-ellipsis overflow-hidden mt-4 h-14   whitespace-nowrap'> {about}</div>
            <Link to={`home/${index}`}> <button className=' bg-black hover:bg-red-500 duration-100 mt-4 text-white font-bold w-full py-2 rounded'>Read in detail</button></Link>

        </div>
    );
};

export default Homecard;