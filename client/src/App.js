import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container,AppBar,Typography,Grow,Grid} from '@mui/material';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar position='static' color='inherit'>
            <Typography  variant='h2' align='center'>
                Student Create & Show
            </Typography>
        </AppBar>
        <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch">
                  <Grid item xs={12} sm={7}>
                      <AppBar position='static' color='inherit'>
                        <Student/>
                      </AppBar>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                  <AppBar  position='static' color='inherit'>
                        <Create/>
                  </AppBar>
                  </Grid>
              </Grid>
            </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
 