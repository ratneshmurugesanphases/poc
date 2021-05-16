import React from "react";
import { useHistory } from "react-router-dom";
// import Card from "./Card";

const Modal = () => {
  const history = useHistory();

  const closeModal = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  React.useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div style={{ backgroundColor: "palegoldenrod"}}>
      <span onClick={closeModal}>XXXXXXXXXXXXXXXX</span>
      <p>I am a Modal</p>
    </div>
  );
};

export default Modal;
