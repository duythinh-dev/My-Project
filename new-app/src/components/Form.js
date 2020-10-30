import {
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import formStyle from "./formStyle.css";

const dataForm = [
  {
    primary: "Công ty",
    variant: "outlined",
    label: "Ten cong ty",
  },
  {
    primary: "Chức vụ",
    variant: "outlined",
    label: "Chức vụ của bạn",
  },
  {
    primary: "Thành phố/tỉnh",
    variant: "outlined",
    label: "Nhập địa chỉ",
  },
];

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      width: "95%",
      margin: theme.spacing(1),
    },
    "& .MuiInputBase-root,.MuiFormControlLabel-root": {
      height: "30px",
    },
    "& .MuiTypography-root": {
      textAlign: "end",
    },
    "& .MuiGrid-grid-xs-7": {
      marginTop: "10px",
    },
    "& .MuiInput-underline": {
      width: "30%",
    },
  },
}));

function Form() {
  const classes = useStyle();
  const [age, setAge] = React.useState("2020");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <form className={classes.root}>
        <Grid container>
          {dataForm.map((item, ix) => (
            <Grid style={{ display: "flex" }} key={(() => `${ix}`)()} xs={12}>
              <Grid item xs={5}>
                <ListItem>
                  <ListItemText primary={item.primary} className="canhBao" />
                </ListItem>
              </Grid>
              <Grid item xs={7}>
                <OutlinedInput placeholder={item.label}></OutlinedInput>
              </Grid>
            </Grid>
          ))}
          <Grid style={{ display: "flex" }} xs={12}>
            <Grid item xs={5}>
              <ListItem>
                <ListItemText primary="Mô tả" />
              </ListItem>
            </Grid>
            <Grid item xs={7}>
              <TextareaAutosize
                placeholder="Mô tả về công việc"
                className="textAutosize"
                style={{
                  width: "500px",
                  height: "100px",
                  marginLeft: "10px",
                  marginTop: "12px",
                }}
              ></TextareaAutosize>
            </Grid>
          </Grid>
          <Grid style={{ display: "flex" }} xs={12}>
            <Grid item xs={5}>
              <ListItem>
                <ListItemText primary="Khoảng thời gian" />
              </ListItem>
            </Grid>
            <Grid item xs={7}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Tôi hiện đang làm việc tại đây"
              />
            </Grid>
          </Grid>
          <Grid style={{ display: "flex" }} xs={12}>
            <Grid item xs={5}></Grid>
            <Grid item xs={7}>
              <Select defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
              </Select>
              <Select defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
              </Select>
              <Select defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2020}>2020</MenuItem>

              </Select>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Form;
