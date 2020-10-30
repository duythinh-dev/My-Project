import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from "./Form"

const useStyles = makeStyles((theme) => ({
    style1: {
      marginLeft:"20px",
      fontWeight:600,
    },

  }))
function test(){
    alert("asdasdad");
}

function BodyWork() {
    const classes = useStyles();

    return (
        <>  
        
            <Grid alignItems="center">
                <Typography gutterBottom variant="subtitle2" className={classes.style1}>
                CÔNG VIỆC
                </Typography>
            </Grid>
            <div className={classes.style2}>
                <div 
                className={classes.style2,classes.background1} 
                onClick={test} >
                    <ListItem>
                        <AddIcon className={classes.background1}/>
                        <ListItemText 
                        primary="Thêm nơi làm việc" 
                        primaryTypographyProps={{className:classes.background1}} />
                    </ListItem>
                </div>
                <form>
                    <div>
                        <Paper>
                            <Form/>
                        </Paper>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BodyWork
