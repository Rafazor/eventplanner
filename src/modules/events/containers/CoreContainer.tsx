import { useQuery } from "react-query";
import { IEvent } from "@/modules/shared/types/IEvent";
import { getEvents } from "@/modules/shared/api/events";

interface IProps {}

export default function CoreContainer(props: IProps) {
  const { isLoading, data } = useQuery<IEvent[]>("getEvents", getEvents);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data?.map((event) => (
        <div className={"p-3 border-4 border-l-red-500 m-5"} key={event.id}>
          <p className={"text-2xl"}>{event.title}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
