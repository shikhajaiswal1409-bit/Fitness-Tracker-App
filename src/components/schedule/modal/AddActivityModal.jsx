import { Box, Dialog, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import DynamicActivityForm from "./DynamicActivityForm";
import ActivitySelector from "./ActivitySelector";

const AddActivityModal = ({
  open,
  handleClose,
  day,
  editData 
}) => {

  const [type, setType] = useState("");

  useEffect(() => {
    if (editData) {
      setType(editData.type); // auto select type when editing
    }
  }, [editData]);

  useEffect(() => {
    if (!open) {
      setType("");
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" disableRestoreFocus fullWidth>
      <Box p={3}>

        {type && (
          <Button onClick={() => setType("")}>
            ← Back
          </Button>
        )}

        {/* SELECT TYPE (ONLY FOR ADD) */}
        {!type && !editData && (
          <ActivitySelector setType={setType} />
        )}

        {/* DYNAMIC FORM */}
        {type && (
          <DynamicActivityForm
            type={type}
            handleClose={handleClose}
            day={day}
            editData={editData} 
          />
        )}

      </Box>
    </Dialog>
  );
};

export default AddActivityModal;