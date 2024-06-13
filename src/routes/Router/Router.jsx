import { BrowserRouter,Routes,Route } from "react-router-dom"

import AuthContextProvider from "../../container/AuthContext/AuthContext"
import Home from "../../pages/Home/Home"
import NewProject from "../../pages/NewProjects/NewProject"



const Router = () => {
    return(
        <AuthContextProvider>            
            <BrowserRouter>            
                <Routes>
                    <Route path="/home/*" element={<Home />}/>      
                    <Route path="/newproject" element={<NewProject />}/>

                    <Route path="*" element={<Home />} />                  
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    )
}

export default Router
