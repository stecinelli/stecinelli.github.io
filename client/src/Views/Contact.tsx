import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Components/Typography';
import Snackbar from '../Components/Snackbar';
import githubLogo from '../Assets/Icons/github-mark.png';
import linkedinLogo from '../Assets/Icons/linkedin.png';

function Contact() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mr: 1,
  };

  return (
    <Container component="section" sx={{ mt: 20, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'secondary.dark',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom color={'#ffffff'}>
                Contact
              </Typography>
              <br></br>
              <Typography variant="h5" color={'#ffffff'}>
                ✉️ stephaniecinelli@gmail.com
              </Typography>
              <br></br>
              <Typography variant="h5" color={'#ffffff'}>
                📱 +46 738934084
              </Typography>
              <br></br>
              <Typography variant="h5" color={'#ffffff'}>
                📌 Stockholm, Sweden
              </Typography>
              <br></br>
              <Grid
                container
                direction="column"
                justifyContent="space-around"
                spacing={4}
                sx={{ height: 120 }}
              >
                <Grid item sx={{ display: 'flex' }}>
                  <Box component="a" href="https://github.com/stecinelli" target='_blank' sx={iconStyle}>
                    <img
                      src={githubLogo}
                      alt="Github"
                      width="85%"
                      height="85%"
                    />
                  </Box>
                  <Box component="a" href="https://www.linkedin.com/in/stephanie-cinelli-ruzzi/" target='_blank' sx={iconStyle}>
                    <img
                      src={linkedinLogo}
                      alt="Linkedin"
                      width="95%"
                      height="95%"
                    />
                  </Box>
                </Grid>

              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

export default Contact;