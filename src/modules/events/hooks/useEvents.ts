import { useQuery } from "react-query";
import { IEvent } from "@/modules/shared/types/IEvent";
import { getEvents } from "@/modules/shared/services/events";
import { useMemo, useState } from "react";
import {
  extractUniqueCategories,
  filterEventsByCategory,
  sortEventsByStartDate,
  toggleStringInArray,
} from "@/modules/events/utils/eventsUtil";
import { useLocalStorage } from "@/modules/shared/hooks/useLocalStorage";

export default function useEvents() {
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [subscribedEvents, setSubscribedEvents] = useLocalStorage<string[]>(
    "subscribedEvents",
    [],
  );

  const { isLoading, data } = useQuery<IEvent[]>("getEvents", getEvents, {
    onSuccess: (events) => {
      const uniqueCategories = extractUniqueCategories(events);
      setCategories(uniqueCategories);
    },
  });

  const eventsList = useMemo(() => {
    if (!data) return [];

    if (!activeCategory) return data;

    return filterEventsByCategory(data, activeCategory);
  }, [activeCategory, data]);

  const userEvents = useMemo(() => {
    if (!data) return [];

    if (!subscribedEvents) return [];

    return sortEventsByStartDate(
      data.filter((event) => subscribedEvents.includes(event.id)),
    );
  }, [data, subscribedEvents]);

  const handleActiveCategory = (category: string) => {
    if (category === activeCategory) {
      setActiveCategory("");
      return;
    }

    setActiveCategory(category);
  };

  const handleSubscribe = (eventId: string) => {
    if (!subscribedEvents) return;

    const newSubscribedEvents = toggleStringInArray(subscribedEvents, eventId);
    setSubscribedEvents(newSubscribedEvents);
  };

  return {
    isLoading,
    eventsList,
    categories,
    userEvents,
    handleActiveCategory,
    activeCategory,
    handleSubscribe,
    subscribedEvents,
  };
}
