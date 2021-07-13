import React from "react";

import { render, cleanup, waitForElement, fireEvent } from "@testing-library/react";
import Appointment from "components/Application";

import Application from "components/Application";

afterEach(cleanup);


// it("renders without crashing", () => {
//   render(<Application />);
// });

describe("Appointment", () => {
//   it("renders without crashing", () => {
//     render(<Appointment />);
//   });
// });
it("defaults to Monday and changes the schedule when a new day is selected", () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});

});
