import React, { useEffect, useState } from 'react'
import Combobox from "react-widgets/Combobox";


const NameFilter = (props) => {
  const [name, setName] = useState("");
  const [opponentsName, setOpponentsName] = useState([]);

  
  

  useEffect(() => {
    let dumyOpponents = [
      { name: "Daniel" },
      { name: "Ben" },
      { name: "Bena" },
      { name: "Omer" },
      { name: "Saar" },
    ];
    const fetchNames = () => {
      setOpponentsName(dumyOpponents);
    };
    fetchNames()
  }, [])

  return (
    <Combobox
      hideCaret
      hideEmptyPopup
      textField={name}
      data={opponentsName}
      filter="contains"
      value={name}
      onChange={(newName) => setName(newName)}
      placeholder="Search for an Opponent"
    />
  );
}

export default NameFilter;
