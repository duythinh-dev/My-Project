import React from "react";
import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Divider,
  ListItemIcon,
} from "@material-ui/core";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CakeIcon from "@material-ui/icons/Cake";
import WcIcon from "@material-ui/icons/Wc";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import img1 from "../img/2.jpg";
import img2 from "../img/6.jpg";
import img3 from "../img/7.jpg";

const style = {
  display: {
    display: "flex",
    flexWrap: "wrap",
  },
  bodyStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  MuiSvgIconRoot: {
    padding: "15 0",
  },
};

const fakeData1 = [
    {
        src:img1,
        text1:" Dev ",
        link1:"/",
        text2:" Hahalolo ",
        link2:"/",
        text3:" Làm biến ",
        link3:"/",
        text4:" Trường ",
        link4:"/",
        seconText1:"Quá khứ:",
        seconText2:" Halotime ",
        seconText3:" và ",
        seconText4:" Teen1s ",
        seconLink1:"/",
        seconLink2:"/",

    },
    {
        src:img2,
        text1:" Dev ",
        link1:"/",
        text2:" Hahalolo ",
        link2:"/",
        text3:" Làm biến ",
        link3:"/",
        text4:" Trường ",
        link4:"/",
        seconText1:"Quá khứ:",
        seconText2:" Halotime ",
        seconText3:" và ",
        seconText4:" Teen1s ",
        seconLink1:"/",
        seconLink2:"/",
    },
    {
        src:img3,
        text1:" Dev ",
        link1:"/",
        text2:" Hahalolo ",
        link2:"/",
        text3:" Làm biến ",
        link3:"/",
        text4:" Trường ",
        link4:"/",
        seconText1:"Quá khứ:",
        seconText2:" Halotime ",
        seconText3:" và ",
        seconText4:" Teen1s ",
        seconLink1:"/",
        seconLink2:"/",
    },
]

const fakeData2= [
    {
        icon:<PhoneIphoneIcon />,
        primary:"1900 8198",
    },
    {
        icon:<CakeIcon />,
        primary:"25 tháng 10, 1993",
    },
    {
        icon:<WcIcon />,
        primary:"Nam",
    },
]

function BodyOverview() {
  return (
    <>
      <Grid container className={style.bodyStyle}>
        <Grid item xs={9} className={style.display}>
            {fakeData1.map((item, ix) => (
                <Grid>
                <ListItem 
                key={(() => `${ix}`)()}
                alignItems="flex-start" 
                className={style.display}>
                    <ListItemAvatar>
                        <Avatar src={item.src} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <React.Fragment>
                            Làm
                            <Link href={item.link1}>{item.text1}</Link>
                            tại
                            <Link href={item.link2}>{item.text2}</Link>
                            và
                            <Link href={item.link3}>{item.text3}</Link>
                            ở
                            <Link href={item.link4}>{item.text4}</Link>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            {item.seconText1}
                        <Link href={item.seconLink1}>{item.seconText2}</Link>
                            {item.seconText3}
                        <Link href={item.seconLink2}>{item.seconText4}</Link>
                        </React.Fragment>
                    }
                    />
                    <ListItemIcon>
                        <MoreHorizIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider/>
                </Grid>
            ))}
        </Grid>
        <Grid item xs={3}>
          {fakeData2.map((item, ix) => (
            <ListItem key={(()=> `${ix}`)()}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.primary} />
          </ListItem>
          ))}                         
        </Grid>
      </Grid>
    </>
  );
}

export default BodyOverview;
