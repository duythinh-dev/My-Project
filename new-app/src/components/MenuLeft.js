import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import {
  Link,
} from "react-router-dom";

const fakeData1 = [
  {
    primary:"Tổng quan",
    to:"/",

  },
  {
    primary:"Công việc và học vấn",
    to:"/bodywork"
  },
  {
    primary:" Nơi từng sống",
    to:"/bodyliving"
  },
  {
    primary:" Thông tin liên hệ và cơ bản",
    to:"bodyinfor"
  },
  {
    primary:"Gia đình và các mối quan hệ",
    to:"/bodyrespect"
  },
  {
    primary:"Chi tiết về bạn",
    to:"/bodydetail"
  },
  {
    primary:"Sự kiện trong đời",
    to:"/bodyevent"
  },
]

const useStyles = makeStyles((theme) => ({
    fontSize: {
      fontSize:"15px",
    },
  }))

function MenuLeft() {
    const classes = useStyles();
    return (
      <>  
       
          <Grid>
            <List component="nav" aria-label="secondary mailbox folders" >
              {fakeData1.map((item,ix) => (
              <div>
                <ListItem key={(() => `${ix}`)()}>
                  <Link to={item.to} style={{textDecoration:"none"}}>
                    <ListItemText primary={item.primary} primaryTypographyProps={{className:classes.fontSize}}/>
                  </Link>
                </ListItem>
                  <Divider/> 
              </div>
              ))}
            </List>
          </Grid>
      </>
    );
}

export default MenuLeft
