import { render, screen } from "@testing-library/react";
import Notification from ".";

describe("Cart Component", () => {
  test("should display the message of props", () => {
    const message = "test prop";
    let isOpen = true;
    const onClose = {};

    render(
      <Notification isOpen={isOpen} message={message} onClose={onClose} />
    );

    const messageOfNotification = screen.getByText("test prop");
    expect(messageOfNotification).toBeInTheDocument();
  });

  test("should render children of component", async () => {
    const message = "";
    let isOpen = true;
    const onClose = {};

    render(
      <Notification isOpen={isOpen} message={message} onClose={onClose} />
    );

    const element = await screen.findByTestId("notification-component");

    expect(element.childElementCount).toEqual(2);
  });
});
