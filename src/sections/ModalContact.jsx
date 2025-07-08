import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Contact from "./Contact";

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        className="w-45 md:w-50 h-10 mx-auto my-0 text-sm flex-center baseBgBtn baseBorder rounded-xl"
        onClick={handleOpen}
      >
        Discuss Project
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "20px",
            maxWidth: "800px",
            width: "90vw",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <Contact />
        </Box>
      </Modal>
    </>
  );
}
export default BasicModal;