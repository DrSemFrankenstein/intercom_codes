import * as React from "react";
import { useState } from "react";
import AddressForm from "./AddresForm";
import ConfirmDialog from "./confirm-dialog";
import AlertDialogSlide from "./UniversalDialog";

export default function ShowDialog({ open, close, ddata }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleNegativeClick = () => {
    close();
  };
  const handlePositiveClick = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = (bool) => {
    if (bool) {
      let lsdata = JSON.parse(window.localStorage.getItem("intercome"));
      const newData = lsdata.filter((d) => d.id !== ddata.id);
      window.localStorage.setItem("intercome", JSON.stringify(newData));
      setConfirmOpen(false);
      close();
    } else {
      setConfirmOpen(false);
      close();
    }
  };

  const [formData, setFormData] = useState(undefined);

  return (
    <div>
      <AlertDialogSlide
        open={open}
        title={"Data"}
        content={
          <AddressForm
            data={(d) => setFormData(d)}
            clear={false}
            init={ddata}
          />
        }
        btnPositiveTitle={"DELETE"}
        btnNegativeTitle={"CLOSE"}
        btnPositiveClick={handlePositiveClick}
        btnNegativeClick={handleNegativeClick}
        btnPositiveDisable={false}
      />
      <ConfirmDialog open={confirmOpen} close={handleConfirmClose} />
    </div>
  );
}
