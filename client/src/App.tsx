import React from 'react';
import withRoot from './WithRoot'
import AppAppBar from './Views/AppAppBar';
import AppFooter from './Views/AppFooter';
import Product from './Views/Product';
import Intro from './Views/Intro';
import Projects from './Views/Projects';
import Contact from './Views/Contact';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Product />
      <Intro />
      <Projects />
      <Contact />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
