import './App.css';
import React from 'react';
import Top from './components/Top'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Divider, Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MenuLeft from './components/MenuLeft'
import { makeStyles } from '@material-ui/core/styles';
import BodyOverview from './components/BodyOverview'
// import BodyWork from './components/BodyWork'
// import BodyLiving from './components/BodyLiving'
// import BodyInfo from './components/BodyInfo'
// import BodyRespect from './components/BodyRespect'
// import BodyDetails from './components/BodyDetails'
// import BodyEvent from './components/BodyEvent'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  display:{
    display:"flex",
    flexWrap:"wrap",
  },

}))

function App() {
  const classes = useStyles();
  return (
    <>
    <Grid className={classes.root}>
      <Container maxWidth="lg" className={classes.display}>
        {/*header text*/}
        <Grid item xs={12}>
          <Top title="Giới thiệu (version 3)"/>
          <Divider/> 
        </Grid>
        <Grid item xs={2}>
            {/*Menu*/}
            <MenuLeft />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={9}>
            {/* body */}
            <BodyOverview/>
            {/* <Router>
              <Switch>
                <Route path="/bodyoverview" exact component={BodyOverview}></Route>
                <Route path="/bodywork" component={BodyWork}></Route>
                <Route path="/BodyLiving" component={BodyLiving}></Route>
                <Route path="/BodyInfo" component={BodyInfo}></Route>
                <Route path="/BodyRespect" component={BodyRespect}></Route>
                <Route path="/BodyDetails" component={BodyDetails}></Route>
                <Route path="/BodyEvent" component={BodyEvent}></Route>
              </Switch>
            </Router> */}
            
        </Grid>
      </Container>
    </Grid>
    </>
  );
}

export default App;
