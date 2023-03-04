import * as React from "react";
import { useState } from "react";
import AddressForm from "./AddresForm";
import AlertDialogSlide from "./UniversalDialog";
import intercomData from "../../assets/intercomData";

export default function AddDialog({ open, close }) {
  const handlePositiveClick = () => {
    let lsdata = JSON.parse(window.localStorage.getItem("intercome")) || [];
    lsdata.push(formData);
    window.localStorage.setItem("intercome", JSON.stringify(lsdata));
    close();
  };
  const handleNegativeClick = () => {
    close();
  };

  const [formData, setFormData] = useState(undefined);
  const [disableBtn, setDisableBtn] = useState(true);

  const [init, setInit] = useState(intercomData.init);

  const handleNewData = (d) => {
    if (JSON.stringify(d) !== JSON.stringify(init)) {
      d.id = Date.now();
      setFormData(d);
      setDisableBtn(false);
    }
  };

  return (
    <div>
      <AlertDialogSlide
        open={open}
        title={"Add New"}
        content={
          <AddressForm data={handleNewData} clear={open} init={undefined} />
        }
        btnPositiveTitle={"ADD"}
        btnNegativeTitle={"CANCEL"}
        btnPositiveClick={handlePositiveClick}
        btnNegativeClick={handleNegativeClick}
        btnPositiveDisable={disableBtn}
      />
    </div>
  );
}
