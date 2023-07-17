import { useQuery } from "react-query";
import { IEvent } from "@/shared/types/IEvent";
import { getEvents } from "@/shared/services/events";
import { useMemo, useState } from "react";
import {
  extractUniqueCategories,
  filterEventsByCategory,
} from "@/modules/events/utils/eventsUtil";

export default function useEvents() {
  const [categories, setCategories] = useState<string[]>([]);
  const [userEvents, setUserEvents] = useState<IEvent[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

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

  const handleActiveCategory = (category: string) => {
    if (category === activeCategory) {
      setActiveCategory("");
      return;
    }

    setActiveCategory(category);
  };

  return {
    isLoading,
    eventsList,
    categories,
    userEvents,
    handleActiveCategory,
    activeCategory,
  };
}
