import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  ListItem,
  ListItemText,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import formStyle from "./formStyle.css";
import PublicIcon from "@material-ui/icons/Public";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";

const dataForm = [
  {
    primary: "Trường học",
    variant: "outlined",
    label: "Trường học",
  },
  {
    primary: "Thành phố/tỉnh",
    variant: "outlined",
    label: "Nhập địa chỉ",
  },
];

const dataSelect = [
  {
    defaultValue: "",
    value1: "",
    text1: "None",
    value2: "2020",
    text2: "2020",
  },
  {
    defaultValue: "",
    value1: "",
    text1: "None",
    value2: "12",
    text2: "12",
  },
  {
    defaultValue: "",
    value1: "",
    text1: "None",
    value2: "14",
    text2: "14",
  },
];
const dataSelect2 = [
  {
    defaultValue: "",
    value1: "",
    text1: "None",
    value2: "2020",
    text2: "2020",
  },
  {
    defaultValue: "",
    value1: "",
    text1: "None",
    value2: "12",
    text2: "12",
  },
  {
    defaultValue: "",
    value1: "",
    text1: "None",
    value2: "14",
    text2: "14",
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
    "& .MuiGrid-grid-lg-7": {
      marginTop: "10px",
    },
    "& .MuiInput-underline": {
      width: "30%",
    },
  },
  containers: {
    display: "flex",
    justifyContent: "flex-end",
    height: "3rem",
    marginTop: "3rem",
  },
}));

function FormHocVan() {
  const classes = useStyle();

  const [display, setDisplay] = useState(false);

  const showForm = () => {
    setDisplay(true);
  };
  const closeForm = () => {
    setDisplay(false);
  };
  const opens = Boolean(display) ? "block" : "none";
  const close = Boolean(display) ? "none" : "block";
  return (
    <>
      <Paper>
        <div
          className={(classes.style2, classes.background1)}
          onClick={showForm}
          style={{ display: close, cursor: "pointer" }}
        >
          <ListItem>
            <AddIcon className={classes.background1} />
            <ListItemText
              primary="Thêm nơi làm việc"
              primaryTypographyProps={{ className: classes.background1 }}
            />
          </ListItem>
        </div>
        <form className={classes.root} style={{ display: opens }}>
          <Grid container>
            {dataForm.map((item, ix) => (
              <Grid style={{ display: "flex" }} key={(() => `${ix}`)()} lg={12}>
                <Grid item lg={5}>
                  <ListItem>
                    <ListItemText primary={item.primary} className="canhBao" />
                  </ListItem>
                </Grid>
                <Grid item lg={7}>
                  <OutlinedInput placeholder={item.label}></OutlinedInput>
                </Grid>
              </Grid>
            ))}
            <Grid style={{ display: "flex" }} lg={12}>
              <Grid item lg={5}>
                <ListItem>
                  <ListItemText primary="Mô tả" className="canhBao" />
                </ListItem>
              </Grid>
              <Grid item lg={7}>
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
            <Grid style={{ display: "flex" }} lg={12}>
              <Grid item lg={5}>
                <ListItem>
                  <ListItemText
                    primary="Khoảng thời gian"
                    className="canhBao"
                  />
                </ListItem>
              </Grid>
              <Grid item lg={7}>
                {dataSelect2.map((item, ix) => (
                  <Select
                    key={(() => `${ix}`)()}
                    defaultValue={item.defaultValue}
                    style={{ maxWidth: "30%", height: 50 }}
                    variant="outlined"
                  >
                    <MenuItem value={item.value1}>{item.text1}</MenuItem>
                    <MenuItem value={item.value2}>{item.text2}</MenuItem>
                  </Select>
                ))}
              </Grid>
            </Grid>
            <Grid style={{ display: "flex" }} lg={12}>
              <Grid item lg={5}></Grid>
              <Grid item lg={7}>
                <ListItem>
                  <Typography>Đến</Typography>
                </ListItem>
              </Grid>
            </Grid>
            <Grid style={{ display: "flex" }} lg={12}>
              <Grid item lg={5}></Grid>
              <Grid item lg={7}>
                {dataSelect.map((item, ix) => (
                  <Select
                    key={(() => `${ix}`)()}
                    defaultValue={item.defaultValue}
                    style={{ maxWidth: "30%", height: 50 }}
                    variant="outlined"
                  >
                    <MenuItem value={item.value1}>{item.text1}</MenuItem>
                    <MenuItem value={item.value2}>{item.text2}</MenuItem>
                  </Select>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid style={{ display: "flex" }} lg={12}>
            <Grid item lg={5}></Grid>
            <Grid item lg={7}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Đã tốt nghiệp"
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid item lg={12} className={classes.containers}>
              <Select
                variant="outlined"
                style={{ minWidth: 180, maxWidth: 200 }}
              >
                <MenuItem value={1}>
                  <PublicIcon />
                  <ListItemText style={{ display: "inline-block" }}>
                    Công khai
                  </ListItemText>
                </MenuItem>
                <MenuItem value={2}>
                  <PublicIcon />
                  <ListItemText style={{ display: "inline-block" }}>
                    Bạn của bạn bè
                  </ListItemText>
                </MenuItem>
                <MenuItem value={3}>
                  <PublicIcon />
                  <ListItemText style={{ display: "inline-block" }}>
                    Bạn bè
                  </ListItemText>
                </MenuItem>
                <MenuItem value={4}>
                  <PublicIcon />
                  <ListItemText style={{ display: "inline-block" }}>
                    Bạn bè ngoại trừ
                  </ListItemText>
                </MenuItem>
                <MenuItem value={5}>
                  <PublicIcon />
                  <ListItemText style={{ display: "inline-block" }}>
                    Bạn bè cụ thể
                  </ListItemText>
                </MenuItem>
                <MenuItem value={6}>
                  <PublicIcon />
                  <ListItemText style={{ display: "inline-block" }}>
                    Chỉ mình tôi
                  </ListItemText>
                </MenuItem>
                <MenuItem value={7}>
                  <PublicIcon />
                  <ListItemText style={{ display: "inline-block" }}>
                    Tùy chỉnh
                  </ListItemText>
                </MenuItem>
              </Select>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                style={{ marginRight: 10, marginBottom: 10 }}
              >
                Lưu
              </Button>
              <Button
                variant="contained"
                onClick={closeForm}
                style={{ marginRight: 10, marginBottom: 10 }}
              >
                Hủy
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

export default FormHocVan;
