'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { signIn } from 'next-auth/react';

const SignupPage = () => {
  const handleSignup = async (event) => {
    event.preventDefault(); 
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json"
      }
    })
    if (resp.status === 200) {
      event.target.reset()
    }
  };

  const handleSocialLogin = async (provider) => {
    await signIn(provider, { redirect: false });
  };

  return (
    <div className='container mx-auto py-24'>
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="">
          <Image src="/assets/images/login/login.svg"
            height={540}
            width={540}
            alt=''
          />
        </div>
        <div className="border-2 p-12">
          <h6 className='text-3xl font-semibold text-center mb-12'>
            Sign Up
          </h6>
          <form onSubmit={handleSignup}>
            <label className='mr-12' htmlFor="name">
              Name
            </label>
            <input type="text"
              name='name'
              placeholder="Your name"
              className="input input-bordered w-full my-6"
            />
            <label className='mr-12' htmlFor="email">
              Email
            </label>
            <input type="text"
              name='email'
              placeholder="Your email"
              className="input input-bordered w-full my-6"
            />
            <br />
            <label htmlFor="password">
              Password
            </label>
            <input type="password"
              name='password'
              placeholder="Your password"
              className="input input-bordered w-full  mt-6"
            />
            <button type='submit' className='btn btn-primary w-full mt-12 my-6'>Sign Up</button>
          </form>

          <div className="text-center">
            <h6>Or Sign In with</h6>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5">
            <button className='text-green-500 rounded-md' onClick={() => handleSocialLogin('google')}><BsGoogle /></button>
            <button className='text-primary rounded-md' onClick={() => handleSocialLogin('github')}><BsGithub /></button>
          </div>
          <h6 className='my-12 text-center'> Already have an account?<Link href='/login' className='text-primary font-semibold ml-2'>Sign In</Link></h6>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;