import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate, } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {
    const {signInUser,} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log('Email: ',email, 'Password: ',password)
        signInUser(email, password)
        .then(result=>{
            // console.log(result.user)
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime}
            fetch(`https://coffee-store-server-liart-ten.vercel.app/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.matchedCount){
                    navigate('/')
                }
                // console.log(data, 'User login info updated in db')
            })
        })
        .catch(error=>{
            // console.log(error)
            Swal.fire({
                title: error.message,
                text: "Need to solve this problem!!",
                icon: "success"
            });
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New to Coffee Master? Please <Link className='underline' to={'/signup'}>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;