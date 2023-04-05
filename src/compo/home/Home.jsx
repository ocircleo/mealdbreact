import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Homecard from '../home-card/Homecard';

const Home = () => {
    const mealDatas = useLoaderData()
    return (
        <div className=' grid grid-cols-1 px-4 sm:grid-cols-1 sm:px-10 md:grid-cols-1 md:px-24 lg:grid-cols-2 lg:px-32 xl:grid-cols-3 xl:px-44'>
            {
                mealDatas.map(meal =><Homecard key={meal.id} meal={meal}></Homecard>)
            }
        </div>
    );
};

export default Home;