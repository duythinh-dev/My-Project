import './App.css';
import React from 'react';
import Top from './components/Top'
import { Divider, Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MenuLeft from './components/MenuLeft'
import { makeStyles } from '@material-ui/core/styles';
import BodyOverview from './components/BodyOverview';
import BodyWork from './components/BodyWork'
import BodyLiving from './components/BodyLiving'
import BodyInfo from './components/BodyInfo'
import BodyRespect from './components/BodyRespect'
import BodyDetails from './components/BodyDetails'
import BodyEvent from './components/BodyEvent'
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';

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
        <Router>
          <Grid item xs={2}>
              {/*Menu*/}
              <MenuLeft />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={9}> 
            <Switch>
              <Route path="/" exact component={BodyOverview}/>               
              <Route path="/bodywork" component={BodyWork}/>               
              <Route path="/bodyliving" component={BodyOverview}/>               
              <Route path="/bodyinfor" component={BodyOverview}/>               
              <Route path="/bodyrespect" component={BodyOverview}/>               
              <Route path="/bodydetail" component={BodyOverview}/>               
              <Route path="/bodyevent" component={BodyOverview}/>               
            </Switch>
          </Grid>
        </Router>
      </Container>
    </Grid>
    </>
  );
}

export default App;
