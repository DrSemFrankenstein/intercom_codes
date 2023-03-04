import * as React from "react";
import { useState } from "react";
import AddressForm from "./AddresForm";
import AlertDialogSlide from "./UniversalDialog";

export default function ShowDialog({ open, close, ddata }) {
  const handlePositiveClick = () => {
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
        title={"Data"}
        content={
          <AddressForm
            data={(d) => setFormData(d)}
            clear={false}
            init={ddata}
          />
        }
        btnPositiveTitle={"CLOSE"}
        btnNegativeTitle={"DELETE"}
        btnPositiveClick={handlePositiveClick}
        btnNegativeClick={handleNegativeClick}
      />
    </div>
  );
}
