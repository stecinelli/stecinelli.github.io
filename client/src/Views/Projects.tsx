import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../Components/Typography';

import Blog from '../Assets/Projects/Blog.jpg';
import FlightFinder from '../Assets/Projects/FlightFinder.jpg';
import MobTimer from '../Assets/Projects/MobTimer.jpg';
import PhotoSearch from '../Assets/Projects/PhotoSearch.jpg';
import SoundGame from '../Assets/Projects/SoundGame.jpg';
import StudentRegister from '../Assets/Projects/StudentRegister.jpg';
import WalletApp from '../Assets/Projects/WalletApp.jpg';
import ToDoNative from '../Assets/Projects/To-DoNative.jpeg';
import ToDoApp from '../Assets/Projects/To-DoList.jpg';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: PhotoSearch,
    title: 'Bootstrap',
    width: '40%',
    href: 'https://github.com/stecinelli/photo_search'
  },
  {
    url: Blog,
    title: 'React',
    width: '20%',
    href: 'https://github.com/stecinelli/story-blog'
  },
  {
    url: WalletApp,
    title: 'React Native Ts',
    width: '40%',
    href: 'https://github.com/stecinelli/wallet-app'
  },
  {
    url: FlightFinder,
    title: 'Typescript',
    width: '38%',
    href: 'https://github.com/stecinelli/flight-finder'
  },
  {
    url: SoundGame,
    title: 'Node.js',
    width: '38%',
    href: 'https://github.com/stecinelli/song-game'
  },
  {
    url: StudentRegister,
    title: 'Redux',
    width: '24%',
    href: 'https://github.com/stecinelli/student-register'
  },
  {
    url: MobTimer,
    title: 'Mob Programming',
    width: '40%',
    href: 'https://github.com/stecinelli/FinalProjectSalt'
  },
  {
    url: ToDoNative,
    title: 'React Native Js',
    width: '20%',
    href: 'https://github.com/stecinelli/daily-app'
  },
  {
    url: ToDoApp,
    title: 'javascript',
    width: '40%',
    href: 'https://github.com/stecinelli/todo-list'
  },
];

export default function Projects() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Projects
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => window.open(image.href, "_blank")}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}