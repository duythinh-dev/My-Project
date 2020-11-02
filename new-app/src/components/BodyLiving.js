import React from "react";
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
import SelectCongKhai from "./SelectCongKhai";
function BodyLiving() {
  return (
    <>
      <div>
        <Typography>THÀNH PHỐ HIỆN TẠI VÀ QUÊ HƯƠNG</Typography>
        <Paper>
          <Grid lg={12}>
            <form>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "20 auto",
                  padding: 20,
                }}
              >
                <Grid lg={5} justify="flex-end">
                  <ListItem style={{ justifyContent: "flex-end" }}>
                    <Typography style={{ margin: "auto 5px" }}>
                      Thành phố hiện tại
                    </Typography>
                  </ListItem>
                </Grid>
                <Grid lg={7}>
                  <OutlinedInput
                    placeholder="Thành phố"
                    style={{ width: "500px" }}
                  />
                </Grid>
              </Grid>
              <Grid>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <SelectCongKhai style={{ margin: 10 }} />
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginRight: 10,
                      marginBottom: 10,
                      marginLeft: 10,
                    }}
                  >
                    Lưu
                  </Button>
                  <Button
                    variant="contained"
                    // onClick={closeForm}
                    style={{ marginRight: 10, marginBottom: 10 }}
                  >
                    Hủy
                  </Button>
                </div>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default BodyLiving;
