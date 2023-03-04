import * as React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddressList from "./list-component";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import intercomData from "../assets/intercomData";
import AddDialog from "../components/Dialogs/add-data-dialog";

export default function IntercomeComponent() {
  const [openAddNew, setOpenAddNew] = useState(false);
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      //   address: data.get("address"),
    });
    // alert(data.get("address"));
  };

  const [intercomData, setIntercomData] = useState(
    JSON.parse(window.localStorage.getItem("intercome"))
  );

  const [filteredData, setFilteredData] = React.useState(intercomData || []);

  const handleChange = (e) => {
    const inputVal = e.target.value;
    setAddress(inputVal);
    if (inputVal === "") {
      setFilteredData(intercomData);
      return;
    }
    const newData = intercomData.filter((item) =>
      item.address.toLowerCase().includes(inputVal.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleRefresh = () => {
    setFilteredData(JSON.parse(localStorage.getItem("intercome")));
    setIntercomData(JSON.parse(localStorage.getItem("intercome")));
    setAddress("");
    setOpenAddNew(false);
  };

  return (
    <div>
      <AddDialog open={openAddNew} close={handleRefresh} />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          INTERCOM
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 1,
            width: "-webkit-fill-available",
            marginInline: "inherit",
          }}
        >
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Address"
              inputProps={{ "aria-label": "search google maps" }}
              margin="none"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
              value={address}
              onChange={(e) => handleChange(e)}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <AddressList data={filteredData}  close={handleRefresh}/>

          <br />

          <Fab
            variant="extended"
            sx={{ minWidth: "25vw", backgroundColor: "antiquewhite" }}
            onClick={() => setOpenAddNew(true)}
          >
            <AddIcon sx={{ mr: 1 }} />
            ADD NEW
          </Fab>
        </Box>
      </Box>
    </div>
  );
}
