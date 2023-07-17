import { IEvent } from "@/shared/types/IEvent";
import EventItemComponent from "@/modules/events/components/EventItemComponent";

interface IProps {
  events: IEvent[];
  handleSubscribe: (eventId: string) => void;
  subscribedEvents: string[] | undefined;
}

export default function EventListComponent(props: IProps) {
  const { events, handleSubscribe, subscribedEvents } = props;

  const checkIfSubscribed = (eventId: string) => {
    if (!subscribedEvents) return false;
    return subscribedEvents.includes(eventId);
  };

  return (
    <>
      {events.map((event) => (
        <EventItemComponent
          event={event}
          key={event.id}
          handleSubscribe={handleSubscribe}
          isSubscribed={checkIfSubscribed(event.id)}
        />
      ))}
    </>
  );
}
