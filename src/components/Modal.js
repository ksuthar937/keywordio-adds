import React from "react";
import styles from "./Modal.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Modal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <CheckCircleIcon color="success" />
        <p>Successfully Submitted!</p>
      </div>
    </div>
  );
};

export default Modal;
