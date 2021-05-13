import React, { Fragment } from "react";
import Card from "./Card";

const names = ["A", "B", "C"]

const Contacts = () => {
  return (
    <div>
      <h1>
        Contacts
      </h1>
      <div>
        {names.map((obj,i) => (
          <Fragment key={i}>
            <Card name={obj} />
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Contacts;
