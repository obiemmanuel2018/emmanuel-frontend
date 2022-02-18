import './Portfolio.screen.css'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CableRoundedIcon from '@mui/icons-material/CableRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DeckIcon from '@mui/icons-material/Deck';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { Projects } from '..';
const Portfolio = ()=>{
  const theme = useTheme();
  const [value, setValue] = useState('all');
  const [indexValue, setIndexValue] = useState(0)
  const handleChange = (event, newValue) => {

    if(newValue=='frontend&backend'){
      setIndexValue(3)
      setValue(newValue);
    }
    else if(newValue=='frontend'){
      setIndexValue(1)
      setValue(newValue);
    }
    else if(newValue=='backend'){
      setIndexValue(2)
      setValue(newValue);
    }
    else{
      setIndexValue(0)
      setValue(newValue);
    }
  };


const handleChangeIndex =(index)=>{

    if(index==0){
      setValue('products');
    }else{
      setValue('interests');
    }
   
  
  
}


return (
    <div className="row">
    <div className="col-12">
    <div className="portfolio">
      <h1>
          My Work
      </h1>
      <div className="line"></div>
      <p>A full stack developer based in <img src="./images/cameroon_flag.png" alt="" /></p>
      <div style={{paddingTop:"2rem"}} >

        
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
       <Tabs
          onChange={handleChange}
          value={value}
          variant="standard" 
          selectionFollowsFocus
          >
          <Tab wrapped={true} iconPosition="start" label="All" value="all" />
          <Tab wrapped={true} iconPosition="start" icon={<DeckIcon/>} label="Frontend"  value="frontend" />
          <Tab wrapped={true} iconPosition="start" icon={<EngineeringIcon/>} label="Backend"  value="backend" />
          <Tab wrapped={true} iconPosition="start" label="Frontend & Backend"  value="frontend&backend" />
         
       </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={indexValue}
        onChangeIndex={(index)=>handleChangeIndex(index)}
        
        threshold={20}
      >
           <div dir={theme.direction}>
          
           <Projects/>
           </div>
             
          
          <div dir={theme.direction}>
          <Projects/>
          </div>
          <div dir={theme.direction}>
          <Projects/>
          </div>
          <div dir={theme.direction}>
          <Projects/>
          </div>

             
          
      </SwipeableViews>
          
          
         
      </div>
  </div>
    </div>
    <div className="col-6">
  
    </div>
</div>
)
}

export default Portfolio;