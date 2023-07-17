import { IEvent } from "@/shared/types/IEvent";

interface IProps {
  event: IEvent;
  handleSubscribe: (eventId: string) => void;
  isSubscribed: boolean;
}

export default function EventItemComponent(props: IProps) {
  const { event, handleSubscribe, isSubscribed } = props;

  return (
    <div
      className={"p-3 border-4 border-l-red-500"}
      onClick={() => handleSubscribe(event.id)}
    >
      <p className={"text-2xl"}>{event.title}</p>
      <p>{event.description}</p>
      <p>{isSubscribed && "yey"}</p>
    </div>
  );
}
