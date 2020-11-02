import { ListItemText, MenuItem, Select } from "@material-ui/core";
import React from "react";
import PublicIcon from "@material-ui/icons/Public";

function SelectCongKhai() {
  return (
    <>
      <Select
        style={{
          minWidth: 200,
          width: "auto",
        }}
        variant="outlined"
      >
        <MenuItem value={1} selected>
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
    </>
  );
}

export default SelectCongKhai;
