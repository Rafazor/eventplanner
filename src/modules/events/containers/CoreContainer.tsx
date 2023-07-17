import { useQuery } from "react-query";
import { IEvent } from "@/types/IEvent";
import { getEvents } from "@/services/events";
import EventListComponent from "@/modules/events/components/EventListComponent";

export default function CoreContainer() {
  const { isLoading, data } = useQuery<IEvent[]>("getEvents", getEvents);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <EventListComponent events={data!} />
    </>
  );
}
