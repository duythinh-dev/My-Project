import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import img1 from "./img/blogcover-1.jpg";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "53.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
  link: {
    fontSize: "1rem",
    fontWeight: 600,
    textDecoration: "none",
  },
  subheader: {
    fontSize: "0.7rem",
  },
}));

const fakeData = {
  user1: {
    name: "Jack Carter",
    linkProfile: "/",
    avarta: img1,
    video: "video",
    linkAlbumVideo: "/",
    community: <PublicIcon fontSize="small" />,
    location: "Huế",
    date: " January,5 2010 19:PM",
  },
};

export default function CardBox() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={fakeData.user1.avarta}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography>
            <Link className={classes.link} href={fakeData.user1.linkProfile}>
              {fakeData.user1.name}
            </Link>{" "}
            đã đăng{" "}
            <Link className={classes.link} href={fakeData.user1.linkAlbumVideo}>
              {fakeData.user1.video}
            </Link>
          </Typography>
        }
        subheader={
          <Typography className={classes.subheader}>
            {fakeData.user1.community}
            {fakeData.user1.location}:{fakeData.user1.date}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Dang Hoa Lau is a homestay in Da Lat that owns the mountain views, a
          panoramic view of the dreamy pine hills, and helps you satisfy your
          dream of touching clouds in the mountain town.
        </Typography>
      </CardContent>
      <CardMedia className={classes.media} image={img1} title="Paella dish" />
    </Card>
  );
}
