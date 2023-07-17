import { IEvent } from "@/shared/types/IEvent";
import EventItemComponent from "@/modules/events/components/EventItemComponent";

interface IProps {
  events: IEvent[];
}

export default function EventListComponent(props: IProps) {
  const { events } = props;

  return (
    <>
      {events.map((event) => (
        <EventItemComponent event={event} key={event.id} />
      ))}
    </>
  );
}
