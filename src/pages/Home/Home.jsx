import { useContext, useState } from "react"
import { FiChevronsLeft,FiChevronsRight } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link, Routes, Route} from "react-router-dom";
import logo from '../../assets/img/logo.webp';
import { CiSearch } from "react-icons/ci";
import { AuthContext } from "../../container/AuthContext/AuthContext";
import SignUp from "../../container/Signup/Signup";
import Projects from "../../container/Projects/Projects";

const Home = () => {

    const [isSlideMenu, setIsSlideMenu] = useState(true)
    
    const { authState} = useContext(AuthContext)

    

    return(
        <div className="flex overflow-hidden">
            <div className={`${isSlideMenu ? "w-60": "w-2" } min-h-screen max-h-screen h-full relative bg-primary px-3 py-6 flex flex-col item-center justify-start gap-4 transition-all duration-200 ease-in-out `}>
                <motion.div whileTap={{scale: 0.8}}
                onClick ={()=> setIsSlideMenu(!isSlideMenu)}className="w-10 h-10 rounded-br-lg rounded-tr-lg absolute flex -right-10 cursor-pointer">
                    {isSlideMenu ? <FiChevronsLeft className="text-white text-xl bg-secondary"/> : <FiChevronsRight className="text-white text-xl bg-secondary"/>}
                </motion.div>

                <div className="overflow-hidden w-full flex flex-col gap-4 justify-center items-center">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" className="object-contain w-45 h-auto "/>
                    </Link>

                    <Link to={"/newproject"} className="overflow-hidden"> 
                        <div className="border border-gray-400 rounded-lg px-12 py-4">
                            <p className="text-gray-400 hover:text-white">Start Coding</p>
                        </div>
                    </Link>

                    {authState && <Link to={"/"} className="flex flex-row justify-center items-center gap-4 overflow-hidden">
                        <FaHome className="text-gray-400 w-5 h-5"/>
                        <p className="text-gray-400 pt-1">Home</p>
                    </Link>}

                </div>             

            </div>
            
            <div className="flex-1 min-h-screen max-h-screen flex flex-col  h-full items-start justify-start gap-2 mt-4 ml-4 p-4 overflow-y-scroll">     
                <div className="w-full  flex justify-between items-center ">
                    <div className="flex bg-primary  h-12 rounded-md w-full">
                        <CiSearch className="text-white  h-12 ml-2 mr-4 gap-2"/>
                        <input type="text" placeholder="search here..." className="flex-1 bg-transparent text-xl outline-none text-white placeholder:text-gray-400 " />                       
                    </div>

                    {!authState && <div className="flex justify-center items-center px-2 ">
                           <Link to="/home/auth" className=" bg-emerald-400 px-2 py-3 rounded-md text-white hover:bg-emerald-700">
                                Signup
                           </Link>
                    </div>}

                    {authState && <div></div>}
                     
                </div>

                <div className="w-full">
                    <Routes>
                        <Route path="/auth" element={<SignUp />}  /> 
                        {/* <Route path="/newproject" element={<NewProject/>} /> */}
                        <Route path="/*" element={<Projects />} />
                    </Routes>                       
                         
                </div>
            </div>            
        </div>
    )
}

export default Home