import { useQuery } from "react-query";
import { getEvents } from "@/modules/_api/events";
import { IEvent } from "@/types/IEvent";

interface IProps {}

export default function CoreContainer(props: IProps) {
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery<
    IEvent[]
  >("query-events", getEvents);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data?.map((event) => (
        <div className={"p-3 border-2 border-amber-950 m-3.5"} key={event.id}>
          <p>{event.title}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
