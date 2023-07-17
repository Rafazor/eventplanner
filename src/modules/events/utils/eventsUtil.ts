import { IEvent } from "@/shared/types/IEvent";

export function extractUniqueCategories(events: IEvent[]): string[] {
  const uniqueCategories: Set<string> = new Set();

  events.forEach((event) => {
    event.categories.forEach((category: string) => {
      uniqueCategories.add(category);
    });
  });

  return Array.from(uniqueCategories);
}

export function filterEventsByCategory(
  events: IEvent[],
  category: string,
): IEvent[] {
  return events.filter((event) => event.categories.includes(category));
}
