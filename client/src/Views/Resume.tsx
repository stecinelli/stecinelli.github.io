import React from 'react'
import withRoot from '../WithRoot'
import { Box } from '@mui/material'
import steResume from '../Assets/Resume/StephanieCinelliResume.pdf'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'

const Resume = () => {
  return (
    <React.Fragment>
      <AppAppBar />
      <Box sx={{ height: '100vw', margin: 10 }} >
        <iframe src={`${steResume}#view=fitH`} title="stephanieResume" height="100%" width="100%" />
      </Box>
      <AppFooter />
    </React.Fragment>

  )
}

export default withRoot(Resume);