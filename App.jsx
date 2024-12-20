import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import memories from './images/memories.png';

function App() {
  return (
    <container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center"> ECHOES</Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
          <Grid item xs={12} sm={4}>
            <Form />

          </Grid>
          </Grid>
        </Container>
      </Grow>
    </container>
  );
}

export default App;