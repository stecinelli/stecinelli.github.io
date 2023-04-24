import * as React from 'react';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../Components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://github.com/stecinelli">
        Ste Cinelli
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light', mt: 10 }}
    >
      <Container sx={{ my: 8, display: 'flex', justifyContent: 'center' }}>
          <Copyright />
      </Container>

    </Typography>
  );
}