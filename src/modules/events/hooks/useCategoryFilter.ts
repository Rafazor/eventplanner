import { useState, useMemo } from "react";
import { filterEventsByCategory } from "@/modules/events/utils/eventsUtil";
import { IEvent } from "@/modules/shared/types/IEvent";

export const useCategoryFilter = (events: IEvent[]) => {
  const [activeCategory, setActiveCategory] = useState<string>("");

  const eventsList = useMemo(() => {
    if (!activeCategory) return events;

    return filterEventsByCategory(events, activeCategory);
  }, [activeCategory, events]);

  const handleActiveCategory = (category: string) => {
    if (category === activeCategory) {
      setActiveCategory("");
      return;
    }

    setActiveCategory(category);
  };

  return {
    eventsList,
    activeCategory,
    handleActiveCategory,
  };
};
