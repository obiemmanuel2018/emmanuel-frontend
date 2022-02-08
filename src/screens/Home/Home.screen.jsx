import './Home.screen.css'
import { Layout } from '../../components';
const Home = ()=>{

   return (
       <div className="row home">
           <div className="col-6" style={{position:"relative"}}>
            <div className="details">
            <h6>
              Hello there ....
            </h6>
            <h3>
            Tanyi Emmanuel
            </h3>
            <h4>
            I'm A Full Stack Developer
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus molestiae itaque incidunt est sit...</p>
            <div className="buttons">
                <button className='work'>
                    My Work
                </button>
                <button className='hire'>
                    Hire me
                </button>
            </div>
            </div>
           
           </div>
           <div className="col-6 image">
             <img src="./images/my_photo_1.png" alt="" />
             <div className="cover"></div>
             <div className="burble-1">
                 O
             </div>
             <div className="burble-2">
                 B
             </div>
             <div className="burble-3">
                 I
             </div>
           </div>
           <p>

           </p>
       </div>
   )
}


export default Home;