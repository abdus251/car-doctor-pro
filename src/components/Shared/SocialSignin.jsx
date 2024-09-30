'use client'
import {  useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin = () => {
    const router = useRouter()
    const session = useSession()
    const handleSocialLogin =  (provider) => {
        const resp =  signIn(provider, {redirect: false})
        }
        if(session.status= 'authenticated') {
            router.push('/')
        }
    

    return (
        <div className='flex items-center justify-center space-x-3 '>
            <button onClick={() => handleSocialLogin('google')} className='btn flex items-center justify-center text-green-500'>
                <BsGoogle />
            </button>

            <button onClick={() => handleSocialLogin('github')} className='btn flex items-center justify-center text-primary-500'>
                <BsGithub />
            </button>
        </div>
    )
}

export default SocialSignin