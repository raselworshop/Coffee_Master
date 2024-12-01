import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CoffeeCard from '../component/CoffeeCard';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import popularBg from '/images/more/1.png'

const Root = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    const navigate = useNavigate();

    const handleNavigateToAddCoffee=()=>{
        navigate('/addcoffee')
    }
    // console.log(coffees)
    return (
        <div>
            <div className='space-y-4 font-rancho'>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            {/* <h2 className='max-w-7xl mx-auto my-5'>Welcome coffee home: {coffees.length}</h2> */}
            <div className='my-12 bg-cover bg-center bg-no-repeat max-w-screen-xl p-6 md:p-10 mx-auto' 
                style={{backgroundImage:`url(${popularBg})`}}
            >
                <div className='font-rancho flex flex-col justify-center items-center gap-5'>
                    <p>--- Sip & Savor ---</p>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-custom-color'
                        style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}
                    >Our Popular Products</h2>
                    <button onClick={handleNavigateToAddCoffee} 
                    className="bg-[#d4a373] hover:bg-[#b8835a] text-white py-2 border-2 border-orange-900 btn px-4 rounded-lg flex items-center justify-center transition duration-300">
                        Add Coffee <span className="ml-2 text-xl">☕</span>
                    </button>
                </div>
                <div className='grid md:grid-cols-2 gap-2 max-w-6xl mx-auto my-5 font-rancho bg-opacity-50'>
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
        </div>
    );
};

export default Root;