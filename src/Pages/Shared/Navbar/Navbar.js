import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../../../assets/Logos/logo1.png";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ maleCount, femaleCount }) => {
    return (
        <div>

            <div className="navbar bg-[#001c7b]">
                <div className="flex-1 -ml-28">
                    <Link to='/' className="btn btn-ghost text-lg">
                        <img className='w-2/5' src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <label className="input-group">
                            <span><FaSearch></FaSearch></span>
                            <input type="text" placeholder="search here" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="">
                        <input type="text" defaultValue={maleCount} className="input bg-[#92d050] w-20 max-w-xs font-semibold rounded-sm px-7 text-xl mx-1" readOnly title='Male' />
                        <input type="text" defaultValue={femaleCount} className="input bg-[#ff0000] w-20 max-w-xs font-semibold rounded-sm px-7 text-xl mx-1 text-white" readOnly title='Female' />
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Navbar;