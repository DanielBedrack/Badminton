import React, { useEffect, useState } from 'react'

const MatchDetails = (props) => {

  const [match, setMatch] = useState(null)

  useEffect(() => {
    setMatch(props.match)
  })
  return (
    <div className='match-component'>
      
    </div>
  )
}

export default MatchDetails

