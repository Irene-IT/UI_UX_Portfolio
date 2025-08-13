import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ContactForm from "./ContactForm";

const ContactModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className="actionBtn" onClick={handleOpen}>
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
            borderRadius: "35px",
            maxWidth: "600px",
            width: "90vw",
            maxHeight: "90vh",
            overflowY: "auto", 
          }}
        >
          <ContactForm onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};
export default ContactModal;
