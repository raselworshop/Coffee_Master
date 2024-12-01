import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../component/CoffeeCard';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';

const Root = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    // console.log(coffees)
    return (
        <div>
            <div className='space-y-4 font-rancho'>
            <Navbar></Navbar>
            <Banner></Banner>
            </div>
            <h2 className='max-w-7xl mx-auto my-5'>Welcome coffee home: {coffees.length}</h2>
           <div className='grid md:grid-cols-2 gap-5 max-w-7xl mx-auto my-5'>
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