import { IEvent } from "@/shared/types/IEvent";

interface IProps {
  events: IEvent[];
}

export default function UserEventsComponent(props: IProps) {
  const { events } = props;

  return (
    <div>
      <p>user events</p>
    </div>
  );
}
