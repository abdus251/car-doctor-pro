import React from 'react'
import ServiceCard from '../cards/ServiceCard'
import { getServices } from '@/services/getServices'

const Services = async () => {
  const {services} = await getServices()
  return (
    <div className='text-slate-800 min-h-screen'>
        <div className="text-center container mx-auto">
            <h3 className='text-2xl font-bold text-orange-600'> Services</h3>
            <h2 className='text-5xl'>Our Service Area</h2>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
        <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
            services?.length > 0 && services.map((service) => (
              <ServiceCard service={service} key={service._id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Services