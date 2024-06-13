import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { motion } from "framer-motion";


const AuthEmailState = ( {label, Icon, placeholder, isPass, setStateFunction, setGetEmailValidation}) => {

    const [value, setValue] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    
    console.log(value)

    const handleOnChange = (e) => {
        setValue(e.target.value)
        setStateFunction(e.target.value)

        if(placeholder === "Email"){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            const status = emailRegex.test(value)
            setIsEmailValid(status)
            setGetEmailValidation(status)
        }
        
    }

    return (
        <div className="flex flex-col justify-start items-start gap-1">
            <label className="text-gray-400">{label}</label>
            <div className={`flex items-center justify-center rounded-md px-4 py-1 bg-gray-200 w-full md:w-96 ${!isEmailValid && placeholder === "Email" && value.length > 0 && "border-2 border-red-400"}`} >
                <Icon className="text-secondary text-2xl"/>
                <input type={isPass && !showPass ? "password" : "text"} placeholder={placeholder} className="outline-none bg-transparent h-full w-full border-none text-lg flex-1 py-2 ml-2 text-gray-600" value={value} onChange={handleOnChange}/>
                {isPass && <motion.div onClick={()=> setShowPass(!showPass)} whileTap={{scale: 0.9}}>
                    {showPass ? <IoMdEye className="text-secondary text-2xl cursor-pointer"/> : <IoMdEyeOff className="text-secondary text-2xl cursor-pointer"/>}
                </motion.div>}
            </div>        
        </div>
    )
}

export default AuthEmailState