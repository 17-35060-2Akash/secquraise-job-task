import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { MdLogout } from "react-icons/md";

const Main = () => {
    const data = useLoaderData();
    // console.log(data);
    const detailsArr = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));
    // console.log(detailsArr);

    let maleCount = 0;
    let femaleCount = 0;

    detailsArr.map((detail) => {

        if (detail[Object.keys(detail)[0]].Gender === 'Male') {

            maleCount++;

        }
        else if (detail[Object.keys(detail)[0]].Gender === 'Female') {

            femaleCount++;
        }
        else {
            console.error('There is something wrong counting gender');
        }
    });



    // console.log(maleCount);
    // console.log(femaleCount);

    return (
        <div>
            <Navbar maleCount={maleCount}
                femaleCount={femaleCount}></Navbar>
            <div className='home-container' style={{
                display: 'grid',
                gridTemplateColumns: '.5fr 8.5fr'
            }}>
                {/* left side bar  */}
                <div className=' bg-[#00b8f1] flex flex-col px-3  justify-between' title='Side Menu'>
                    <label htmlFor="dashboarddrawer" tabIndex={2} className="btn btn-ghost mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div>
                        <label className="btn btn-ghost text-white text-xl mb-5" title='Logout'>
                            <MdLogout></MdLogout>
                        </label>

                    </div>
                </div>
                <div className="drawer drawer-pc">
                    <input id="dashboarddrawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboarddrawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-32 bg-[#00b8f1]  text-white font-semibold">
                            {/* <!-- Sidebar content here --> */}
                            <React.Fragment>
                                <li className='items-center'><Link to='/'>Option 1</Link></li>
                                <li className='items-center'><Link to='/'>Option 2</Link></li>
                                <li className='items-center'><Link to='/'>Option 3</Link></li>
                            </React.Fragment>

                        </ul>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Main;