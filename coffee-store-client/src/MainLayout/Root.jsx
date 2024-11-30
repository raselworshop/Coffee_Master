import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../component/CoffeeCard';
import Navbar from '../component/Navbar';

const Root = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    console.log(coffees)
    return (
        <div className='max-w-7xl mx-auto my-12'>
            <Navbar></Navbar>
            <h2>Welcome coffee home: {coffees.length}</h2>
           <div className='grid md:grid-cols-2 gap-5'>
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