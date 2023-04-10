import React, { useState } from 'react'
import './comboBox.css'

const ComboBox = () => {

   const [selectedValue, setSelectedValue] = useState("");
   const options = ["Clear", "Drop", "Smash", "Drive", "Net", "Other"];

   const handleChange = (event) => {
     setSelectedValue(event.target.value);
   };

   return (
     <div className="combo-box">
       <select value={selectedValue} onChange={handleChange}>
         <option value="">Select a shot</option>
         {options.map((option) => (
           <option key={option} value={option}>
             {option}
           </option>
         ))}
       </select>
     </div>
   );
}

export default ComboBox
