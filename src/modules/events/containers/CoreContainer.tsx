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
        <div className={"p-3 border-4 border-l-red-500 m-5"} key={event.id}>
          <p className={"text-2xl"}>{event.title}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
