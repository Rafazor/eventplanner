import { IEvent } from "@/shared/types/IEvent";
import EventItemComponent from "@/modules/events/components/EventItemComponent";
import clsx from "clsx";

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
    <div className="flex flex-col-reverse gap-10">
      {events.map((event, index) => (
        <EventItemComponent
          className={clsx({
            "mr-10": index % 2 === 0,
            "ml-10": index % 2 !== 0,
          })}
          event={event}
          key={event.id}
          handleSubscribe={handleSubscribe}
          isSubscribed={checkIfSubscribed(event.id)}
        />
      ))}
    </div>
  );
}
