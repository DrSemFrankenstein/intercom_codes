import * as React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarIcon from "@mui/icons-material/Star";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ShowDialog from "./Dialogs/show-data-dialog";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import SweetAlert2 from "react-sweetalert2";

export default function AddressList({ data, close }) {
  const [openShowDialog, setOpenShowDialog] = useState(false);
  const [ddata, setDData] = useState(undefined);

  const hendleOpenShowDialog = (d) => {
    setDData(d);
    setOpenShowDialog(true);
  };

  React.useEffect(() => {
    if (ddata) {
      setOpenShowDialog(true);
    }
  }, [ddata]);

  const handleClose = () => {
    close();
    setOpenShowDialog(false);
  };

  const [swalProps, setSwalProps] = useState({});

  const handelClickShowCode = (code) => {
    setSwalProps({
      show: true,
      position: "center",
      // icon: "info",
      title: code,
      showConfirmButton: false,
      timer: 5500,
    });
  };

  return (
    <>
      <SweetAlert2
        {...swalProps}
        didClose={() => {
          setSwalProps({});
        }}
      />
      <ShowDialog open={openShowDialog} close={handleClose} ddata={ddata} />
      <List sx={{ width: "100%" }}>
        {data.map((d, i) => (
          <React.Fragment key={i}>
            <ListItem key={i} alignItems="flex-start">
              <ListItemButton onClick={() => handelClickShowCode(d.code)}>
                <ListItemIcon>
                  <ApartmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary={d.address}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        CODE
                      </Typography>
                      {" — "} {d.code}
                    </React.Fragment>
                  }
                />
                {/* <IconButton aria-label="delete"  onClick={() => hendleOpenShowDialog(data[i])}>
                <LocationOnIcon />
                </IconButton> */}

                <IconButton
                  aria-label="edit"
                  color="secondary"
                  onClick={() => hendleOpenShowDialog(data[i])}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
