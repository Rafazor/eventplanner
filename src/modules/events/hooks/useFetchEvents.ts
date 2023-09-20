import { useQuery } from "react-query";
import { IEvent } from "@/modules/shared/types/IEvent";
import { getEvents } from "@/modules/shared/services/events";
import { useState } from "react";
import { extractUniqueCategories } from "@/modules/events/utils/eventsUtil";

export const useFetchEvents = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const { isLoading, data } = useQuery<IEvent[]>("getEvents", getEvents, {
    onSuccess: (events) => {
      const uniqueCategories = extractUniqueCategories(events);
      setCategories(uniqueCategories);
    },
  });

  return {
    isLoading,
    events: data || [],
    categories,
  };
};
