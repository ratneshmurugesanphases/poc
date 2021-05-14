import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import Card from "./Card";
import ModalWithForm from "atoms/Form";

const Modal = () => {
  const history = useHistory();

  const closeModal = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div style={{ backgroundColor: "palegoldenrod" }}>
      <span onClick={closeModal}>XXXXXXXXXXXXXXXX</span>
      <ModalWithForm />
    </div>
  );
};

export default Modal;
