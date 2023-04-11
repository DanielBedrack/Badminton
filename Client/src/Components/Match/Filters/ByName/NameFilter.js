import React, { useEffect, useState } from 'react'
import Combobox from "react-widgets/Combobox";


const NameFilter = (props) => {
  const [name, setName] = useState("");
  const [opponentsName, setOpponentsName] = useState([]);

  const fetchNames = () => {
    setOpponentsName(dumyOpponents);
  }
  let dumyOpponents = [
    { name: "Daniel" },
    { name: "Ben" },
    { name: "Bena" },
    { name: "Omer" },
    { name: "Saar" },
  ];

  useEffect(() => {
    fetchNames()
  }, [])

  return (
    <Combobox
      hideCaret
      hideEmptyPopup
      textField={name}
      data={dumyOpponents}
      filter="contains"
      value={name}
      onChange={(newName) => setName(newName)}
      placeholder="Search for an Opponent"
    />
  );
}

export default NameFilter;
