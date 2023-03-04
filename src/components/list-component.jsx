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

export default function AddressList({ data }) {
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

  return (
    <>
      <ShowDialog
        open={openShowDialog}
        close={() => setOpenShowDialog(false)}
        ddata={ddata}
      />
      <List sx={{ width: "100%" }}>
        {data.map((d, i) => (
          <>
            <ListItem
              alignItems="flex-start"
              onClick={() => hendleOpenShowDialog(data[i])}
            >
              <ListItemButton>
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
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
}
