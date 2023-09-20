import { useMemo } from "react";
import {
  sortEventsByStartDate,
  toggleStringInArray,
} from "@/modules/events/utils/eventsUtil";
import { useLocalStorage } from "@/modules/shared/hooks/useLocalStorage";
import { IEvent } from "@/modules/shared/types/IEvent";

export const useUserEvents = (events: IEvent[]) => {
  const [subscribedEvents, setSubscribedEvents] = useLocalStorage<string[]>(
    "subscribedEvents",
    [],
  );

  const userEvents = useMemo(() => {
    if (!subscribedEvents) return [];

    return sortEventsByStartDate(
      events.filter((event) => subscribedEvents.includes(event.id)),
    );
  }, [events, subscribedEvents]);

  const handleSubscribe = (eventId: string) => {
    if (!subscribedEvents) return;

    const newSubscribedEvents = toggleStringInArray(subscribedEvents, eventId);
    setSubscribedEvents(newSubscribedEvents);
  };

  return {
    userEvents,
    subscribedEvents,
    handleSubscribe,
  };
};
