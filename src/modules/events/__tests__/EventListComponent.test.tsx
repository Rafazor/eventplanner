import { render, screen } from "@testing-library/react";
import { IEvent } from "@/modules/shared/types/IEvent";
import EventListComponent from "@/modules/events/components/EventListComponent";
import { mockEvents } from "@/mockData/events";

describe("EventListComponent", () => {
  const events: IEvent[] = mockEvents;

  const handleSubscribe = jest.fn();
  const subscribedEvents = ["event1"];

  beforeEach(() => {
    render(
      <EventListComponent
        events={events}
        handleSubscribe={handleSubscribe}
        subscribedEvents={subscribedEvents}
      />,
    );
  });

  it("renders the correct number of events", () => {
    const eventItems = screen.getAllByTestId("event-item");
    expect(eventItems.length).toBe(events.length);
  });
});
