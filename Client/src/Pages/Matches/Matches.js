import React, { useEffect, useState } from 'react'
//import MatchDetails from '../../Components/Match/MatchDetails'
import MatchFilters from '../../Components/Match/Filters/MatchFilters';
import './matches.css'
import MatchDetails from '../../Components/Match/MatchComponent/MatchDetails';

const Matches = ( props ) => {
const [matches, setMatches] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:4000/api/user/matches");
        const json = await response.json();

        if (!response.ok) {
          throw Error("No Matches Yet");
        }
        setMatches(json);
      };
      fetchData();
    }, []);

  return (
    <div className="matches-page">
      <div className="matches-filters">
        <MatchFilters matches={matches} />
      </div>
      <div className="matches-container">
        {matches.map((match) => (
          <div key={match.id}>
            <MatchDetails match={match} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matches
