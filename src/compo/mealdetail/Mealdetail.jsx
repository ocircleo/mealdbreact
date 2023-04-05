import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Mealdetail = () => {
    const mealdetail = useLoaderData()
    let {name,about,picture}=mealdetail
    console.log(mealdetail)
    const navigate = useNavigate()
    
    return (
        <div className='z-0 w-96 border p-5 my-5 flex flex-col justify-between mx-auto'>
        <img src={picture} className='h-40 w-fit mx-auto' />
        <h2 className=' text-2xl '>catagory: {name}</h2>
        <div className=' mt-4 '><span className='font-bold'>Detaill : </span> {about}</div>
        <button onClick={()=>navigate(-1)} className='bg-black hover:bg-red-500 duration-100 mt-4 text-white font-bold w-full py-2 rounded'> Back to home</button>
       

    </div>
    );
};

export default Mealdetail;