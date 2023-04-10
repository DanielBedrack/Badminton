
import './stats.css'

const GameStats = () => {

//   const [stats, setStats] = useState([])

//   const statsCheck = () =>{
//     stats.forEach(stat => {
//       return (
//         <div className="">

//         </div>
//       )
//     });
// }

  return (
    <div className="stats-container">
      <div className="game-results">
        <p>Game Time</p>
        <div className="result-div">
          <p>Me</p>
          <div className="results">
            <p>first set</p>
            <p>second set</p>
            <p>third set?</p>
          </div>
          <p>Opponent</p>
        </div>
        <div className="all-results">
          Player 1: X - Winner Shots - Player 2: Y Player 1: X - Winner Shots -
          <br />
          Player 1: X - Winner Shots - Player 2: Y Player 1: X - Winner Shots -
          <br />
          Player 1: X - Winner Shots - Player 2: Y Player 1: X - Winner Shots -
          <br />
          Player 1: X - Winner Shots - Player 2: Y Player 1: X - Winner Shots -
          <br />
          Player 2: Y Player 2: Y Player 2: Y Player 2: Y
        </div>
      </div>
    </div>
  );
};

export default GameStats;
