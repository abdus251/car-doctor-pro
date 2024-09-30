'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { IoCartOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return (
      <div className=" text-slate-900">
        <div className="navbar mx-15 continer mx-auto ">
          <div className="navbar-start">
            <Link href='/'>
              <Image src="/assets/logo.svg" height={60} width={100} alt='' />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className='flex items-center space-x-6'>
              {
                navItems.map((item) => (
                  <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>{item.title}</Link>
                ))
              }
            </div>
          </div>

          <div className="navbar-end">
            <div className="flex space-x-3 items-center mr-2">
              <IoCartOutline className='text-xl' />
              <IoSearch className='text-xl' />
              {/* <a className='btn btn-outline px-8'> Appointment</a> */}
             { !session.data ? <Link className='btn btn-primary px-8' href='/login'>Login </Link> : 
             <button className='btn btn-primary px-8' onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>  } 
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" text-slate-900">
      <div className="navbar mx-15 continer mx-auto ">
        <div className="navbar-start">
          <Link href='/'>
            <Image src="/assets/logo.svg" height={60} width={100} alt='' />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className='flex items-center space-x-6'>
            {
              navItems.map((item) => (
                <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>{item.title}</Link>
              ))
            }
          </div>
        </div>

        <div className="navbar-end">
          <div className="flex space-x-3 items-center mr-2">
            <IoCartOutline className='text-xl' />
            <IoSearch className='text-xl' />
            <Link href="/login" className='btn btn-primary px-8'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const navItems = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "services",
    path: "/services"
  },
  {
    title: "Blog",
    path: "/blog"
  },
  {
    title: "Contact",
    path: "/contact"
  },
]

export default Navbar;