import { IEvent } from "@/shared/types/IEvent";

interface IProps {
  events: IEvent[];
}

export default function UserEventsComponent(props: IProps) {
  const { events } = props;

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.title}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
