import { getDownloadURL, listAll, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Link, useLoaderData } from 'react-router-dom';
import { storage } from "../../firebase/firebase.config";
import { format, parseISO } from 'date-fns';
import './Home.css';

const Home = () => {
    const detailsObj = useLoaderData();
    // console.log(detailsObj);
    const detailsArr = Object.entries(detailsObj).map((e) => ({ [e[0]]: e[1] }));
    // console.log(detailsArr);
    /* 
        const [files, setFiles] = useState([]);
        const listRef = ref(storage, 'images/');
    
    
           useEffect(() => {
           listAll(listRef)
               .then((res) => {
                   res.prefixes.forEach((folderRef) => {
                       // All the prefixes under listRef.
                       // You may call listAll() recursively on them.
                   });
                   res.items.forEach((itemRef) => {
                       // All the items under listRef.
                       // setFiles(arr => [...arr, itemRef.fullPath]);
                       //getting download url
       
       
                   });
               }).catch((error) => {
                   // Uh-oh, an error occurred!
               });
           }, []); */

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const genderCategories = ['Male', 'Female'];
    const locationCategories = ['Chennai', 'Hyderabad', 'Bangalore'];



    const [imgUrl, setImgUrl] = useState('https://firebasestorage.googleapis.com/v0/b/secquraise-job-task-49805.appspot.com/o/images%2FFemale01.jpg?alt=media&token=ca2ff2a3-2271-4326-98ae-a8b615afae96');

    const getImages = (name) => {
        const imgRef = ref(storage, `images/${name}.jpg`);

        getDownloadURL(imgRef)
            .then((url) => {
                // Insert url into an <img> tag to "download"
                setImgUrl(url);
            })
            .catch((error) => {
                ///

            });
    }

    // console.log(files);
    // console.log(imgUrl);

    // console.log(detailsObj['EVT0001']);

    const [singleDetail, setSingleDetail] = useState(detailsObj['EVT0001']);

    const handleShowDetail = (eventDetail) => {
        setSingleDetail('');
        setSingleDetail(eventDetail);
        getImages(eventDetail?.Name);
    };

    // console.log(singleDetail);


    return (

        <div style={{
            display: 'grid',
            gridTemplateColumns: '6fr 2.5fr'
        }}>
            {
                <div className='grid grid-cols-2 gap-0'>
                    <div className='text-start p-12  pt-24'>
                        <h2 className='text-2xl font-bold'>{singleDetail.ID}</h2>
                        <h2 className='text-xl font-bold'>Person Detected</h2>
                        <div className='flex flex-row text-lg font-semibold py-7 text-black'>
                            <div className=''>
                                <p>Name</p>
                                <p>Location</p>
                                <p>Date</p>
                                <p>Time</p>
                            </div>
                            <div className='px-5'>
                                <p>: {singleDetail?.Name}</p>
                                <p>: {singleDetail?.Location}</p>
                                <p>: {format(parseISO(singleDetail?.Date), 'dd-MMM-yy')}</p>
                                <p>: {format(parseISO(singleDetail?.Time), 'HH:mm:ss')}</p>
                            </div>
                        </div>

                        <div className='text-lg font-semibold text-start'>
                            <p>Description:</p>
                            <p>{singleDetail?.Name} detected at <br /> {singleDetail.Location} on {format(parseISO(singleDetail.Date), 'Lo LLLL, yyyy')}.</p>
                        </div>
                    </div>
                    <div style={{ width: '370px', height: '520px' }} className="flex flex-col align-baseline">
                        <p className='text-2xl font-semibold text-start py-3'>{singleDetail?.Gender}</p>
                        <img className='w-full h-full' src={imgUrl} alt="" />
                    </div>
                </div>
            }
            <div className='bg-gray-200 p-2'>
                <div className='bg-white'>
                    <div className='p-3.5'>
                        <div className='flex flex-row justify-between align-middle'>

                            <div id="table-wrapper">

                                {/* list table  */}
                                <div className="overflow-x-auto" id="table-scroll">

                                    <table className="table w-full" >
                                        <thead className='sticky top-0'>
                                            <tr>

                                                <th className='bg-white text-start '>
                                                    <div className=''>
                                                        <p className='text-xl font-bold text-start normal-case'>Events</p>
                                                    </div>
                                                </th>

                                                <th className='bg-white text-end'>

                                                    <div className="dropdown dropdown-end">
                                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar p-2"
                                                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                                                            style={{ zIndex: '11' }}
                                                        >
                                                            <label className=" text-3xl">
                                                                <HiAdjustmentsHorizontal></HiAdjustmentsHorizontal>
                                                            </label>
                                                        </label>
                                                        {
                                                            isMenuOpen &&
                                                            <ul tabIndex={0} className="mt-3 p-2 menu menu-compact dropdown-content bg-base-100 rounded-box w-72 shadow-xl">
                                                                <li>
                                                                    <div className="justify-between">
                                                                        <select name='gender' className="w-full h-12 border-none">
                                                                            <option disabled selected className=''>Choose a Location:</option>
                                                                            {
                                                                                locationCategories.map((category, idx) => <option value={category}

                                                                                    key={idx}>{category}</option>)
                                                                            }
                                                                            {/* {errors.category_id && <p className='text-error p-1'>{errors.category_id.message}</p>} */}
                                                                        </select>
                                                                        {/* Profile
                                                                        <span className="badge">New</span> */}
                                                                    </div>
                                                                </li>
                                                                <li><div>
                                                                    <select name='gender' className="w-full h-12 border-none">
                                                                        <option disabled selected className=''>Choose a Gender:</option>
                                                                        {
                                                                            genderCategories.map((category, idx) => <option value={category}

                                                                                key={idx}>{category}</option>)
                                                                        }
                                                                        {/* {errors.category_id && <p className='text-error p-1'>{errors.category_id.message}</p>} */}
                                                                    </select>
                                                                </div></li>
                                                                <li><div>
                                                                    <input type="date" placeholder="Date" className="input w-full max-w-xs px-1" />
                                                                </div></li>
                                                            </ul>
                                                        }
                                                    </div>


                                                </th>

                                            </tr>
                                        </thead>
                                        {/* {console.log(Object.keys(detail)[0])} */}
                                        <tbody className='text-gray-900 font-semibold' >
                                            {
                                                detailsArr.map((detail, idx) => <tr className='mx-0 px-0 bg-gray-200 border border-white border-b-8 hover:bg-gray-400'
                                                    onClick={() => handleShowDetail(detail[Object.keys(detail)[0]])}
                                                    key={idx}>
                                                    <td className='bg-gray-200'>
                                                        <p>{Object.keys(detail)[0]}: {detail[Object.keys(detail)[0]].Location}</p>
                                                        <br />
                                                        <p>Person detected.</p>
                                                    </td>

                                                    <td className='bg-gray-200 border-b-0 flex-1 align-top'>
                                                        {/* const date = format(selectedDate, 'PP'); */}
                                                        {/* <p>{format(parseISO(detail[Object.keys(detail)[0]].Date), 'MM-dd-yyyy HH:mm:ss')} </p> */}
                                                        <p className='pr-2'>{format(parseISO(detail[Object.keys(detail)[0]].Date), 'MM-dd-yyyy')} {format(parseISO(detail[Object.keys(detail)[0]].Time), 'HH:mm:ss')}</p>
                                                        {/* <p>{format(parseISO(detail[Object.keys(detail)[0]].Time), 'HH:mm:ss')}</p> */}
                                                    </td>

                                                </tr>)


                                            }


                                        </tbody>
                                    </table>

                                    {/* {
                                         for(const property in detailsObj){
                                            
                                         }
                                    } */}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;