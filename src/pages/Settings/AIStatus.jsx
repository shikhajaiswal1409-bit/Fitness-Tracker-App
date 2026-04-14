import { Box, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";

const AIStatusOverlay = ({ open, status, message }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Box
                sx={{
                  background: "#fff",
                  padding: "40px",
                  borderRadius: "20px",
                  textAlign: "center",
                  minWidth: "300px"
                }}
              >
                {status === "loading" && (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    🤖
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1.2 }}>
                    ✅
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div animate={{ x: [-10, 10, -10, 10, 0] }}>
                    ❌
                  </motion.div>
                )}

                <Typography mt={2}>{message}</Typography>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIStatusOverlay;