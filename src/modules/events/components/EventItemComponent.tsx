import { IEvent } from "@/shared/types/IEvent";

interface IProps {
  event: IEvent;
}

export default function EventItemComponent(props: IProps) {
  const { event } = props;

  return (
    <div className={"p-3 border-4 border-l-red-500"}>
      <p className={"text-2xl"}>{event.title}</p>
      <p>{event.description}</p>
    </div>
  );
}
