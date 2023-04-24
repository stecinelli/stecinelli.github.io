import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Components/Typography';
import myImage from '../Assets/Images/ste photo art 2.jpg'


const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Intro() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 5 }}>
                Profile
              </Typography>
              <Typography variant="h5">
                {
                  'Software Developer passionate for learning and solving complex problems.'
                }<br></br><br></br>
                {
                  'I have worked for 7 years in software development projects focused on Customer Experience, and was awarded for 4 consecutive years for being a collaborative, innovative and reliable professional.'
                }<br></br><br></br>
                {
                  'Demonstrated skills in React.js, Node.js and TypeScript and certificated on Agile, CX, UX and DevOps.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src={myImage}
                alt="graph"
                sx={{ height: '150%', width: '150%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Intro;