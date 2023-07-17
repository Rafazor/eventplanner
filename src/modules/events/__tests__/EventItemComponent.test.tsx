import { render, screen, fireEvent } from "@testing-library/react";
import { mockEvent } from "@/mockData/events";
import EventItemComponent from "@/modules/events/components/EventItemComponent";
import "@testing-library/jest-dom";

describe("EventItemComponent", () => {
  const event = mockEvent;

  const handleSubscribe = jest.fn();
  const isSubscribed = true;
  const className = "custom-class";

  beforeEach(() => {
    render(
      <EventItemComponent
        event={event}
        handleSubscribe={handleSubscribe}
        isSubscribed={isSubscribed}
        className={className}
      />,
    );
  });

  it("renders the event title correctly", () => {
    const eventTitle = screen.getByText(event.title);
    expect(eventTitle).toBeInTheDocument();
  });

  it("calls handleSubscribe when clicking on the item", () => {
    const eventItem = screen.getByTestId("event-item");
    fireEvent.click(eventItem);
    expect(handleSubscribe).toHaveBeenCalledWith(event.id);
  });

  it("renders the subscribed icon when isSubscribed is true", () => {
    const subscribedIcon = screen.getByTestId("subscribed-icon");
    expect(subscribedIcon).toBeInTheDocument();
  });

  it("renders the unsubscribed icon when isSubscribed is false", () => {
    render(
      <EventItemComponent
        event={event}
        handleSubscribe={handleSubscribe}
        isSubscribed={false}
        className={className}
      />,
    );
    const unsubscribedIcon = screen.getByTestId("unsubscribed-icon");
    expect(unsubscribedIcon).toBeInTheDocument();
  });
});
