// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  describe("make sure the Dashboard loads", () => {
    it("runs the tests", () => {
      expect(true).toBe(true);
    });

    it("renders without crashing", () => {
      render(<Dashboard />);
    });
  });

  describe("Dashboard functionality", () => {
    it("Close Gate button works, but not when locked", () => {
      const { getByText, getByLabelText } = render(<Dashboard />);
      const lockingButton = getByText(/Lock Gate/i);
      const openingButton = getByText(/Close Gate/i);
      getByText(/unlocked/i);
      getByText(/open/i);

      fireEvent.click(openingButton);
      getByText(/closed/i);

      fireEvent.click(openingButton);
      getByText(/open/i);

      fireEvent.click(openingButton);
      getByText(/closed/i);

      fireEvent.click(lockingButton);
      getByText(/locked/i);

      fireEvent.click(openingButton);
      getByText(/closed/i);
    });

    it("Lock Gate button works, but not when open", () => {
      const { getByText, getByLabelText } = render(<Dashboard />);
      const lockingButton = getByText(/Lock Gate/i);
      const openingButton = getByText(/Close Gate/i);
      getByText(/unlocked/i);
      getByText(/open/i);

      fireEvent.click(lockingButton);
      getByText(/unlocked/i);

      fireEvent.click(openingButton);
      getByText(/closed/i);

      fireEvent.click(lockingButton);
      getByText(/locked/i);

      fireEvent.click(openingButton);
      getByText(/closed/i);

      fireEvent.click(lockingButton);
      getByText(/unlocked/i);

      fireEvent.click(openingButton);
      getByText(/open/i);
    });
  });
});
