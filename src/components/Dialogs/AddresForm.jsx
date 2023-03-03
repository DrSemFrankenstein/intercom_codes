import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function AddressForm({ data, clear, init }) {

  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    address: "",
    code: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    data(formData);
  }, [formData]);

  useEffect(() => {
    if (clear) {
      setFormData({
        latitude: "",
        longitude: "",
        address: "",
        code: "",
      });
    }
  }, [clear]);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="latitude"
            name="latitude"
            label="LATITUDE"
            fullWidth
            autoComplete="latitude"
            variant="standard"
            value={init? init.latitude : formData.latitude}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="longitude"
            name="longitude"
            label="LONGITUDE"
            fullWidth
            autoComplete="longitude"
            variant="standard"
            value={init? init.longitude : formData.longitude}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="ADDRESS LINE"
            fullWidth
            autoComplete="shipping address-line"
            variant="standard"
            value={init? init.address : formData.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="code"
            name="code"
            label="CODE"
            fullWidth
            autoComplete="code"
            variant="standard"
            type="number"
            value={init? init.code : formData.code}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
