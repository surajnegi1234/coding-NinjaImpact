import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Subpart = ({text,src}) => {
  return (
    <a className='data-tab'>
    <div className="data-tab-1">
       <div className="data-tab-2">
           <img src={src} alt="" />
       </div>
       <span>{text}</span>
    </div>
   <ArrowForwardIosIcon style={{
       padding:"8px",

   }}/>
   </a>
  )
}

export default Subpart
