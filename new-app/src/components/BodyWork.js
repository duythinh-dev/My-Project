import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Divider,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./FormJob";
import Fade from "@material-ui/core/Fade";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PublicIcon from "@material-ui/icons/Public";
import FormHocVan from "./FormHocVan";

const useStyles = makeStyles((theme) => ({
  style1: {
    marginLeft: "20px",
    marginTop: "20px",
    fontWeight: 600,
  },
}));
const fakeData = [
  {
    src: "/",
    href: "/",
    textPrimary: "IT",
    textSecondary: "Dev · từ 2016 đến hiện tại",
  },
  {
    src: "/",
    href: "/",
    textPrimary: "Làm Biến",
    textSecondary: "Nội trợ · từ 1993 đến hiện tại",
  },
];
const fakeData2 = [
  {
    src: "/",
    href: "/",
    textPrimary: "Trường đại học khoa học Huế",
    textSecondary: "Địa điểm 1 · từ 2010 đến 2016",
  },
  {
    src: "/",
    href: "/",
    textPrimary: "Trường trung học Phạm Văn Đồng",
    textSecondary: "Địa điểm 2 · từ 2010 đến 2016",
  },
];
function BodyWork() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <>
      <Grid alignItems="center">
        <Typography gutterBottom variant="subtitle2" className={classes.style1}>
          CÔNG VIỆC
        </Typography>
      </Grid>
      <div>
        <Form />
        <div>
          {fakeData.map((item, ix) => (
            <Grid key={(() => `${ix}`)()}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={item.href} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Link href={item.href}>{item.textPrimary}</Link>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>{item.textSecondary}</React.Fragment>
                  }
                />
                <ListItemIcon>
                  <PublicIcon />
                  <MoreHorizIcon
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  />
                </ListItemIcon>
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Sửa</MenuItem>
                  <MenuItem onClick={handleClose}>Xóa</MenuItem>
                </Menu>
              </ListItem>
              <Divider />
            </Grid>
          ))}
        </div>
      </div>
      <Grid alignItems="center">
        <Typography gutterBottom variant="subtitle2" className={classes.style1}>
          HỌC VẤN
        </Typography>
      </Grid>
      <div>
        <FormHocVan />
        {fakeData2.map((item, ix) => (
          <Grid key={(() => `${ix}`)()}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={item.href} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Link href={item.href}>{item.textPrimary}</Link>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>{item.textSecondary}</React.Fragment>
                }
              />
              <ListItemIcon>
                <PublicIcon />
                <MoreHorizIcon
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                />
              </ListItemIcon>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Sửa</MenuItem>
                <MenuItem onClick={handleClose}>Xóa</MenuItem>
              </Menu>
            </ListItem>
            <Divider />
          </Grid>
        ))}
      </div>
    </>
  );
}

export default BodyWork;
