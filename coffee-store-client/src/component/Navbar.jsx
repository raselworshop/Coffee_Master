import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user,setUser, signOutUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOutUser()
            .then(()=>{
                setUser(null)
                setLoading(false)
                navigate('/')
            })
            .catch(error=>{
                setLoading(false)
                Swal.fire({
                    title: error.message,
                    text: "Need to solve this problem!!",
                    icon: "success"
                })
            })
    }
    const links = <>
        <li><Link className="hover:bg-custom-yellow transition duration-300" to={'/'}>Home</Link></li>
        <li><Link className="hover:bg-custom-yellow transition duration-300" to={'/addcoffee'}>Add Coffee</Link></li>
        <li><Link className="hover:bg-custom-yellow transition duration-300" to={'/users'}>User</Link></li>
    </>
    return (
        <div className='max-w-7xl mx-auto my-5'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl hover:bg-custom-yellow transition duration-300">Coffee House</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?<>
                        <img className="w-10 h-10 rounded-xl mr-4" src={user.photoURL} alt="" />
                        <button onClick={handleSignOut} className="btn hover:bg-custom-yellow transition duration-300">Log Out</button></>
                        : <button className="btn hover:bg-custom-yellow transition duration-300"><Link to={'/signin'}>Log in</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;