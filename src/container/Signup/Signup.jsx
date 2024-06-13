import { MdEmail } from 'react-icons/md';
import { MdPassword } from "react-icons/md";
import logo from '../../assets/img/logo.webp';
import AuthEmailState from '../AuthEmailState/AuthEmailState';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';


const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [getEmailValidation, setGetEmailValidation] = useState(false)
    const [isUser, setIsUser] = useState(false)

    return (
        <div>
            <div className="flex justify-start items-start w-full">
                <img src={logo} alt="Logo" className="object-contain w-32  h-auto opacity-50 "/>
            </div>

            <div className='flex flex-col justify-center items-center py-3  w-full'>
                <h1 className='text-gray-400 text-2xl py-12'>Join with us! 🤩</h1>

                <div className='px-8 w-100 py-4 bg-secondary shadow-md items-center flex flex-col justify-center gap-8 rounded-md'>

                    {/* email */}
                    <AuthEmailState label="Email" Icon={MdEmail} placeholder="Email" key="Email" isPass={false} setStateFunction={setEmail} setGetEmailValidation={setGetEmailValidation}/>

                    {/* password */}
                    <AuthEmailState label="Password" Icon={MdPassword} placeholder="Password" key="Password" isPass={true} setStateFunction={setPassword} />                    

                    {/* login */}

                    {isUser ? <motion.div whileTap={{scale: 0.8}} className=" flex items-center justify-center cursor-pointer bg-emerald-400 px-2 py-3 w-96 rounded-md text-white hover:bg-emerald-700">
                        SignUp
                    </motion.div> : <motion.div whileTap={{scale: 0.8}} className=" flex items-center justify-center cursor-pointer bg-emerald-400 px-2 py-3 w-96 rounded-md text-white hover:bg-emerald-700">
                        Login
                    </motion.div>}

                    {/* message */}

                    {isUser ? <p className="text-gray-400">Already have an account! {" "} <span onClick={() => setIsUser(!isUser)}  className='text-emerald-400 cursor-pointer'>Login Here</span> </p> : <p className="text-gray-400">Doesn't have a account ! {" "} <span onClick={() => setIsUser(!isUser)} className='text-emerald-400 cursor-pointer'>Create Here</span> </p>}
                    
                    {/* or */}
                    <div className='flex justify-center items-center gap-12'>
                        <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-32'></div>
                        <p className='text-[rgba(256,256,256,0.4)]'>OR</p>
                        <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-32'></div>
                    </div>

                    {/* sign in with google */}
                    <motion.div className='flex justify-center items-center backdrop-blur-md gap-3 w-full bg-[rgba(256,256,256,0.2)] rounded-md px-2 py-3 cursor-pointer hover:bg-[rgba(256,256,256,0.1)]'>
                        <FcGoogle className='text-3xl'/>
                        <p className='text-white text-xl'>Sign in with Google</p>
                    </motion.div>

                    {/* or */}
                    <div className='flex justify-center items-center gap-12'>
                        <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-32'></div>
                        <p className='text-[rgba(256,256,256,0.4)]'>OR</p>
                        <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-32'></div>
                    </div>

                    {/* sign in with github */}
                    <motion.div className='flex justify-center items-center backdrop-blur-md gap-3 w-full bg-[rgba(256,256,256,0.2)] rounded-md px-2 py-3 cursor-pointer hover:bg-[rgba(256,256,256,0.1)]'>
                        <FaGithub className='text-3xl'/>
                        <p className='text-white text-xl'>Sign in with Github</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SignUp