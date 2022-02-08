import './About.screen.css';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const About = ()=>{
return (
    <>
    <div className="about">
        <h1>
            About Me
        </h1>
        <div className="line"></div>
        <p>A full stack developer based in <img src="./images/cameroon_flag.png" alt="" /></p>
        <div className="row">
            <div className="col-4">
             <div className="image">
              <img src="./images/my_photo_3.png" alt="" />
              <div className="cover"></div>
             </div>
            </div>
            <div className="col-8">
                <div className="details">
                    <h3>I'm Tanyi Emmanuel</h3>
                    <p>A full stack developer based in Cameroon</p>
                    <blockquote>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, labore sed. Suscipit dolorem sed eveniet aut vero quia minima distinctio quibusdam et nihil nobis est tempora accusantium, illo repellat exercitationem fugit sunt velit aspernatur rem alias at necessitatibus corrupti amet?
                    </blockquote>
                    <div className="row">
                        <div className="col-6 info">
                            <div className="title">Birthday</div>
                            <div className="value">30<sup>th</sup> June 1999</div>
                        </div>
                        <div className="col-6 info">
                            <span className="title">E-mail</span>
                            <span className="value" style={{textTransform:"lowercase"}}>obiemmanuel2018@gmail.com</span>
                        </div>
                        <div className="col-6 info">
                            <span className="title">Age</span>
                            <span className="value">23</span>
                        </div>
                        <div className="col-6 info">
                            <span className="title">Phone</span>
                            <span className="value">(+237)-681-14-28-67</span>
                        </div>
                        <div className="col-6 info">
                            <span className="title">Residence</span>
                            <span className="value">Cameroon</span>
                        </div>
                        <div className="col-6 info">
                            <span className="title">Whatsapp</span>
                            <span className="value">81142867</span>
                        </div>
                        <div className="col-6 info">
                            <span className="title">Address</span>
                            <span className="value">Buea, Cameroon</span>
                        </div>
                        <div className="col-6 info">
                            <span className="title">Freelance</span>
                            <span className="value">available</span>
                        </div>
                        
                    </div>
                    <button className="download-btn">
                       <FileDownloadOutlinedIcon/> Download cv
                    </button>

                </div>

            </div>
        </div>
    </div>
    <div className="about skills">
        <h1>
            My Skills
        </h1>
        <div className="line"></div>
        <p>A full stack developer based in <img src="./images/cameroon_flag.png" alt="" /></p>
        <div className="row">
          
        </div>
    </div>
    </>
  
)
}


export default About;