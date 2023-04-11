import React, { useEffect, useState } from 'react'
//import MatchDetails from '../../Components/Match/MatchDetails'
import MatchFilters from '../../Components/Match/Filters/MatchFilters';
import './matches.css'

const Matches = ( props ) => {
  const [matches, setMatches]   = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch('http://localhost:4000/api/matches')
      const json = response.json()

      if (response.ok) {
        setMatches(json)
      }
    }

    fetchMatches()
  }, [])

  return (
    <div className="matches-page">
      <div className="matches-filters">
        <MatchFilters matches = {matches}/>
      </div>
      <div className="matches-container">
        {/* {matches.map((match) => (
          <div key={match.id} className="">
            <MatchDetails match={match} />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Matches
