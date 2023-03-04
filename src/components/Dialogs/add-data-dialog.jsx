import * as React from "react";
import { useState } from "react";
import AddressForm from "./AddresForm";
import AlertDialogSlide from "./UniversalDialog";

export default function AddDialog({ open, close }) {
  const handlePositiveClick = () => {
    let lsdata = JSON.parse(window.localStorage.getItem("intercome"))
      ? JSON.parse(window.localStorage.getItem("intercome"))
      : [];
    lsdata.push(formData);
    window.localStorage.setItem("intercome", JSON.stringify(lsdata));
    close();
  };
  const handleNegativeClick = () => {
    close();
  };

  const [formData, setFormData] = useState(undefined);

  return (
    <div>
      <AlertDialogSlide
        open={open}
        title={"Add New"}
        content={
          <AddressForm
            data={(d) => setFormData(d)}
            clear={open}
            init={undefined}
          />
        }
        btnPositiveTitle={"ADD"}
        btnNegativeTitle={"CANCEL"}
        btnPositiveClick={handlePositiveClick}
        btnNegativeClick={handleNegativeClick}
      />
    </div>
  );
}
