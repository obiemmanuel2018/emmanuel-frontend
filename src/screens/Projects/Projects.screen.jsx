import { useState,useEffect} from 'react';
import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Skeleton from '@mui/material/Skeleton';
import './Projects.screen.css';
import Drawer from '@mui/material/Drawer';
// import {UndrawProductTeardown} from 'react-undraw-illustrations';
const Projects = ()=>{
const projects = [];
const loading = true;
const [projectDrawerOpen,setProjectDrawerOpen] = useState(false);
const [activeProject,setActiveProject] = useState(null);


const handleProjectDrawerClose =()=>{
  setProjectDrawerOpen(false);
  setActiveProject(null);

}

const handleProjectDrawerOpen = (project_id)=>{
  setProjectDrawerOpen(true);
  setActiveProject(project_id);
}



const skeletonELem = [0,0,0,0,0];
const connectHandler =(event,identifier)=>{
    alert(`chart with seller to buy ${identifier}`);
}

return (

    
        <div className='projects'>
            {loading ? 
            <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 4}}>
            <Masonry gutter={10}>
            
             {skeletonELem.map((elem,index)=>{
                 return (
                    <div className="skeleton-card" key={index}>
                    <div className="image">
                      <div className="skeleton-block">
                      <Skeleton variant="rectangular" height={400} />
                      </div>
                    </div>
                    
                    <div className="details">
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
  
                   
                      <Skeleton variant="text" />
                    </div> 
            </div>
                 )
             })}
           
             </Masonry>
            </ResponsiveMasonry>
          
            :
            projects.length > 0 ?

            <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 3}}>
            <Masonry 
            gutter={10}
            elementType={'div'}
            updateOnEachImageLoad={true}
            
            >
              {/* {projects.map((project)=><ProCard view={()=>handleProjectDrawerOpen(project.id)} key={project.id} {...project} />)} */}
              
            
             </Masonry>
            </ResponsiveMasonry>
            :
            <div className='no-product'>
                  {/* <UndrawProductTeardown height={400} width={400} primaryColor="var(--secondary-color)"/> */}
                  <h6>No project</h6>
                  <p>Click on floating button to add product</p>


              </div>
            }
        


    {/* drawer to display product detail */}
    <Drawer
      classes={{ paper:'project-paper' }}
      anchor="right"
      open={projectDrawerOpen}
      onClose={()=>setProjectDrawerOpen(!projectDrawerOpen)}
      >
      
      {/* <ProductDetail id={activeProduct} close={handleProductDrawerClose} /> */}
    
       
    </Drawer>
    </div>
        
        
    
);
}


export default React.memo(Projects);

