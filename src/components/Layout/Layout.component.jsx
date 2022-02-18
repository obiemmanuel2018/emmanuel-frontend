import "./Layout.component.css"
import { Navbar,Sidebar } from "..";

const Layout = (props)=>{
return (
   <div className="row">
       <div className="col-1" style={{position:'relative'}}>
           <Sidebar/>
       </div>
       <div className="col-11">
           {props.children}
       </div>
   </div>
)
}

export default Layout;