import React from 'react'
import BadmintonCourt from './BadmintonCourt/BadmintonCourt'
import CourtNavbar from './CourtNavbar/CourtNavbar'
import ShotsTable from './ShotsTable/ShotsTable'
import './court.css'

const Court = () => {
  return (
    <div className='court-blocks'>
      <ShotsTable />
      <BadmintonCourt />
      <CourtNavbar />
    </div>
  )
}

export default Court
