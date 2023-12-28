"use client"
import React from 'react'
import { FaSearch } from "react-icons/fa";
import Card from './Card';



const FullEvent = () => {
    return (
        <>
                <div className='d-flex justify-content-end align-items-center bg-blue-500'>
                    <div className="form search">
                        <input className='p-1 text-lg rounded-left' type="text" placeholder='Search Events Here' />
                        <button className=" bg-primary text-white rounded-0 outline-none p-2 text-sm">Search</button>
                    </div>
                </div>
            <main className='xl:px-20'>
                <div className="forYou mt-36">
                    <h1 className=' text-5xl px-16 pl-0 text-black'><b>FOR YOU</b></h1>
                    <hr className='h-0 bg-black ' />
                   <Card watched={23}/>
                </div>
                <div className="latest mt-36">
                <h1 className=' p-0 text-5xl px-36 pt-10 text-black'><b>LATEST EVENTS</b></h1>
                <hr className='h-0 bg-black ' />
                <Card watched={20}/>
                </div>
                
                <div className="History mt-36">
                <h1 className=' p-0 text-5xl px-36 pt-10 text-black'><b>HISTORY</b></h1>
                <hr className='h-0 bg-black ' />
                   <Card watched={23}/>
                </div>
                <div className="evental grid-cols-2">
                    

                </div>
            </main>
        </>
    )
}

export default FullEvent;

