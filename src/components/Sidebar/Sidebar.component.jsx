import "./Sidebar.component.css";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuBookIcon from '@mui/icons-material/MenuBook'; 
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import {NavLink} from "react-router-dom"
const Sidebar = ()=>{
return (
    <div className="sidebar shadow">
     <div className="banner">
         <h2>Tanyi</h2>
     </div>
     <ul>
         <NavLink to="/">
         <li>
             <div className="icon">
             <CottageOutlinedIcon/>
             </div>
             <div className="text">
             Home
             </div>
         </li>

         </NavLink>
       <NavLink to="/about">
       <li >
             <div className="icon">
             < MenuBookIcon/>

             </div>
             <div className="text">
             About
             </div>
            
            
         </li>

         </NavLink>
         <NavLink to="/portfolio">
         <li>
             <div className="icon">
             <WorkOutlineOutlinedIcon/>
             </div>
             <div className="text">
             Portfolio
             </div>
           
           
         </li>

         </NavLink>
        <NavLink to="contact">
        <li>
             <div className="icon">
             <PermContactCalendarIcon/>
             </div>
             <div className="text">
             Contacts

             </div>
           
            
         </li>

        </NavLink>
        
     </ul>
    </div>
)
}


export default Sidebar;