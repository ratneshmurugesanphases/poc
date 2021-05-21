import React from "react";
import { useHistory } from "react-router-dom";

const RouteModalWrapper = ({ children }) => {
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
    <div style={{ backgroundColor: "palegoldenrod" }}>
      {children({
        closeModal,
      })}
    </div>
  );
};

export default RouteModalWrapper;
