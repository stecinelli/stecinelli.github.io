import React from 'react'
import { Outlet } from 'react-router-dom'

const Rooter = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

export default Rooter