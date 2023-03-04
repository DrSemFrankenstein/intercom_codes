import * as React from "react";
import AlertDialogSlide from "./UniversalDialog";

export default function ConfirmDialog({ open, close }) {
  const handlePositiveClick = () => {
    close(true);
  };
  const handleNegativeClick = () => {
    close(false);
  };

  return (
    <div>
      <AlertDialogSlide
        open={open}
        title={"Confirmation"}
        content={
          <h2>Are you sure you want to delete this data?</h2>
        }
        btnPositiveTitle={"YES"}
        btnNegativeTitle={"NO"}
        btnPositiveClick={handlePositiveClick}
        btnNegativeClick={handleNegativeClick}
        btnPositiveDisable={false}
      />
    </div>
  );
}
