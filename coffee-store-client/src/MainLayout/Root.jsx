import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../component/CoffeeCard';

const Root = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    console.log(coffees)
    return (
        <div className='my-12'>
            <h2  className='text-5xl text-center text-sky-500'>Coffee House: {coffees.length}</h2>
           <div className='grid md:grid-cols-2 gap-5 m-20'>
           {
                coffees.map(coffee => <CoffeeCard
                 key={coffee._id}
                 coffee={coffee}
                 coffees={coffees}
                 setCoffees={setCoffees}
                ></CoffeeCard>)
            }
           </div>
        </div>
    );
};

export default Root;