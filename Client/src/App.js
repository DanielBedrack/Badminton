import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Matches from "./Pages/Matches/Matches";
import Login from "./Pages/Login/Login";
import Help from "./Pages/Help/Help";
import Game from "./Pages/Analysis/Game/Game";
import Shots from "./Pages/Analysis/Shots/Shots";
import "./App.css";
import Analysis from "./Pages/Analysis/Analysis";
import Registration from "./Components/Forms/Registration";
// import  Data  from "./Data/data.json"

function App() {
  
  const [user, setUser] = useState(null);
  // const data = json.parse(Data)

  return (
    <div className="App">
      {user ? (
        <Navbar isLogedIn={false} setUser={setUser} />
      ) : (
        <Navbar isLogedIn={false} setUser={setUser} />
      )}
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis/>} />
          <Route path="/matches" element={<Matches />} />         
          <Route path="/help" element={<Help />} />
          <Route path="/analysis/game" element={<Game />} />
          <Route path="/analysis/shots" element={<Shots />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
