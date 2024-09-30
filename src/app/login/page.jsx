'use client'
import SocialSignin from '@/components/Shared/SocialSignin'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Page = () => {
    const router = useRouter();

        const handleLogin = async (event) => {
                    event.preventDefault();
                    const email = event.target.email.value;
                    const password = event.target.password.value;
                    const resp = await signIn('credentials', {
                        email,
                        password,
                        redirect: false
                    });
                    console.log(resp);
            if(resp.status === 200) {
                router.push('/')
            }
        }
    
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
                        Sign In
                    </h6>
                    <form onSubmit={handleLogin}>
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
                        <button type='submit' className='btn btn-primary w-full mt-12 my-6'>Sign In</button>
                    </form>

                    <div className="text-center">
                        <h6 className='mb-6'>Or Sign In with</h6> ***
                        <SocialSignin></SocialSignin>
                    </div>
                    <h6 className='my-12 text-center'>Don't have account?{" "}<Link href='/signup' className='text-primary font-semibold ml-2'>Sign Up</Link></h6>
                </div>
            </div>
        </div>
    )
}

export default Page




// 'use client'
// import Image from 'next/image'
// import Link from 'next/link';
// import { signIn } from "next-auth/react";
// import { useRouter } from 'next/navigation';
// import SocialSignin from '@/components/Shared/SocialSignin';

// const Page = () => {

//     const router = useRouter()
//     const handleLogin = async (event) => {
//         event.preventDefault();
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const resp = await signIn('credentials', {
//             email,
//             password,
//             redirect: false
//         });
// if(resp.status === 200) {
//     router.push('/')
// }
//     };

//     return (
//         <div className='container mx-auto py-24'>
//             <div className="grid grid-cols-2 gap-12 items-center">
//                 <div className="">
//                     <Image src="/assets/images/login/login.svg"
//                         height={540}
//                         width={540}
//                         alt=''
//                     />
//                 </div>
//                 <div className="border-2 p-12">
//                     <h6 className='text-3xl font-semibold text-center mb-12'>
//                         Sign In
//                     </h6>
//                     <form onSubmit={handleLogin}>
//                         <label className='mr-12' htmlFor="email">
//                             Email
//                         </label>
//                         <input type="text"
//                             name='email'
//                             placeholder="Your email"
//                             className="input input-bordered w-full my-6"
//                         />
//                         <br />
//                         <label htmlFor="password">
//                             Password
//                         </label>
//                         <input type="password"
//                             name='password'
//                             placeholder="Your password"
//                             className="input input-bordered w-full  mt-6"
//                         />
//                         <button type='submit' className='btn btn-primary w-full mt-12 my-6'>Sign In</button>
//                     </form>

//                     <div className="text-center">
//                         <h6 className='mb-6'>Or Sign In with</h6>
//                         <SocialSignin></SocialSignin>
//                     </div>
//                     <h6 className='my-12 text-center'>Don't have account?{" "}<Link href='/signup' className='text-primary font-semibold ml-2'>Sign Up</Link></h6>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Page;