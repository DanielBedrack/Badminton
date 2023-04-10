// import React, { useState } from 'react'
// import MatchDetails from '../../Components/Match/MatchDetails'

const Matches = ( props ) => {
  const { matches } = props;

  return (
    <div className='matches-container'>
      {matches.map((match) => (
        <div key={match.id}>
          {/* <MatchDetails match={match}/> */}
        </div>
      ))}
    </div>
  );
}

export default Matches
