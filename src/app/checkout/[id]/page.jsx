'use client'
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Checkout =  ({params}) => {
    const {data} = useSession();
    const [service, setService] = useState({})
    const loadService = async () => {
        const details = await getServicesDetails(params.id)
setService(details.service)
    };
     const { _id, title, description, img, price, facility } = service || {};

const handleBooking = async (event) => {
    event.preventDefault();
};

useEffect(() => {
    loadService()
}, [params])

    return (
        <div className='container mx-auto'>
            <div className="relative h-72">
                <Image
                    className='absolute h-72 w-full left-0 top-0 object-cover'
                    src={img}
                    alt='service'
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold flex justify-center">
                        Checkout {title}
                    </h1>
                </div>
            </div>
            <div className="my-12 bg-slate-300">
                <form onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 px-8">
                        <div className="form-control">
                            <label className="">
                                <span className='label-text'>Name</span>
                            </label>
                            <input defaultValue={data?.user?.name} type="text" name='name' className='input input-bordered' />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className='label-text'>Date</span>
                            </label>
                            <input type="date" name='date' className='input input-bordered' />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className='label-text'>Email</span>
                            </label>
                            <input type="text" name='email' className='input input-bordered' placeholder='email' />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className='label-text'>Due amount</span>
                            </label>
                            <input type="text" name='due' className='input input-bordered' />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className='label-text'>Phone</span>
                            </label>
                            <input type="text" name='phone' className='input input-bordered' placeholder='Your Phone'/>
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className='label-text'>Present Address</span>
                            </label>
                            <input type="text" name='address' className='input input-bordered'placeholder='Your Address' />
                        </div>
                    </div>
                       <div className="w-full px-8"> <button className="btn btn-block btn-primary mt-4 mb-8">Order Confirm</button></div>
                </form>
            </div>
        </div>
    )
}

export default Checkout;