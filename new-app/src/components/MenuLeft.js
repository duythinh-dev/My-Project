import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Typography, Link, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    fontSize: {
      fontSize:"15px",
    },
  }))

function MenuLeft() {
    const classes = useStyles();
    return (
      <>
        <List component="nav" aria-label="secondary mailbox folders" >
          <ListItem>
            <ListItemText>
                <Typography className={classes.fontSize}>
                    Tổng quan
                </Typography>
            </ListItemText>
          </ListItem>
          <Divider/> 
          <ListItem>
            <ListItemText primary="Công việc và học vấn" primaryTypographyProps={{className:classes.fontSize}}/>
          </ListItem>
          <Divider/> 
          <ListItem>
            <ListItemText>
                <Typography className={classes.fontSize}>
                Nơi từng sống
                </Typography>
            </ListItemText>
          </ListItem>
          <Divider/> 
          <ListItem>
            <ListItemText>
                <Typography className={classes.fontSize}>
                Thông tin liên hệ và cơ bản
                </Typography>
            </ListItemText>
          </ListItem>
          <Divider/> 
          <ListItem>
            <ListItemText>
                <Typography className={classes.fontSize}>
                Gia đình và các mối quan hệ
                </Typography>
            </ListItemText>
          </ListItem>
          <Divider/> 
          <ListItem>
            <ListItemText>
                <Typography className={classes.fontSize}>
                Chi tiết về bạn
                </Typography>
            </ListItemText>
          </ListItem>
          <Divider/> 
          <ListItem>
            <ListItemText>
                <Typography className={classes.fontSize}>
                Sự kiện trong đời
                </Typography>
            </ListItemText>
          </ListItem>            
        <Divider orientation="vertical" flexItem />
        </List>

      </>
    );
}

export default MenuLeft
