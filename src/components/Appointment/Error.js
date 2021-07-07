import React from "react";

import "components/Appointment/styles.scss";
import Button from "components/Button";

const Error = function(props) {
  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{props.message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClose={props.onClose}
      />
    </main>
  );
};

export default Error;
