import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const handleDelete = (_id) => {
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-liart-ten.vercel.app/coffee/${_id}`, {
                    method: 'DELETE' 
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remainingCoff = coffees.filter(coffe => coffe._id !== _id);
                            setCoffees(remainingCoff)
                        }
                    })
            }
        });
    }

    const { photo, name, chef, taste, _id } = coffee;
    return (
        <div className="card lg:card-side bg-orange-50 shadow-xl m-2">
            <figure>
                <img
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <button className="btn join-item hover:bg-black 
                        text-lg transition duration-300 hover:text-custom-yellow">View</button>
                    <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn join-item hover:bg-black 
                        text-lg transition duration-300 hover:text-custom-yellow lg:px-6">Edit</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn join-item bg-red-500 hover:bg-black 
                        text-lg transition duration-300 hover:text-custom-yellow">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;