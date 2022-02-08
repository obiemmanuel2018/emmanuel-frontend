import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { 
    About,
    Contact,
    Home,
    Portfolio
 } from "../screens";

 import { Layout } from "../components";

const Navigation = ()=>{


    return (
     
            <Router>
            
            <Layout>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/about" exact  element={<About/>}/>
              <Route path="/contact" exact  element={<Contact/>}/>
              <Route path="/portfolio" exact  element={<Portfolio/>}/>
            </Routes>
            </Layout>
           
        </Router>

       
        
    )
}


export default Navigation