import * as React from "react";
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
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function AddressList({ data }) {
  return (
    <List sx={{ width: "100%" }}>
      {data.map((d) => (
        <>
          <ListItem alignItems="flex-start">
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
  );
}
