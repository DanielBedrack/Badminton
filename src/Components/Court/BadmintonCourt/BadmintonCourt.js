import React from 'react'
import Court from "../../../Assets/badmintonCourt.jpg";
import './badmintonCourt.css'

const BadmintonCourt = () => {
  return (
    <div className="court">
      <img className='courtImg' src={Court} alt='Court'/>
  
    </div>
  );
}

export default BadmintonCourt
