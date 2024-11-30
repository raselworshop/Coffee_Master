import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { createUser, } = useContext(AuthContext)

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email)
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                const createdAt = result.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt };
                // save user info to the database 
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('user created to db', data);
                        if (data.insertedId) {
                            // console.log('user created successfully!')
                            Swal.fire({
                                title: "Successfull!",
                                text: "User successfully created an account.",
                                icon: "success"
                            });
                        }
                    })
            })
            .catch(error => {
                // console.log(error, 'the eorrr is')
                Swal.fire({
                    title: error.message,
                    text: "Some thing is wrong",
                    icon: "error"
                });
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? Please <Link className='underline' to={'/signin'}>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;