import React from "react";
import { render, screen } from "@testing-library/react";
import { Register } from "../index";

describe("Register", () => {
  beforeEach(() => {
    render(<Register />);
  });

  it("should render a Formik container", () => {
    const formik = screen.getByTestId("test-id-formik-container");
    expect(formik).toBeInTheDocument();
  });
});
