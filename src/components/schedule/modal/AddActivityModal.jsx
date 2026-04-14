import { Dialog, Box, Button, Fade } from "@mui/material";
import React, { useEffect, useState } from "react";

import DynamicActivityForm from "./DynamicActivityForm";
import ActivitySelector from "./ActivitySelector";

const AddActivityModal = ({ open, handleClose, day, editData }) => {

  const [type, setType] = useState("");

  useEffect(() => {
    if (editData) {
      setType(editData.type);
    }
  }, [editData]);

  useEffect(() => {
    if (!open) {
      setType("");
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          padding: "10px",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.15)"
        }
      }}
    >
      <Box p={3}>

        {/* BACK BUTTON */}
        {type && (
          <Button
            onClick={() => setType("")}
            sx={{
              mb: 2,
              textTransform: "none",
              fontWeight: 600
            }}
          >
            ← Back
          </Button>
        )}

        {/* STEP 1 */}
        {!type && !editData && (
          <Fade in>
            <Box>
              <ActivitySelector setType={setType} />
            </Box>
          </Fade>
        )}

        {/* STEP 2 */}
        {type && (
          <Fade in>
            <Box>
              <DynamicActivityForm
                type={type}
                handleClose={handleClose}
                day={day}
                editData={editData}
              />
            </Box>
          </Fade>
        )}

      </Box>
    </Dialog>
  );
};

export default AddActivityModal;