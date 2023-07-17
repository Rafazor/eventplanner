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

export function toggleStringInArray(arr: string[], str: string): string[] {
  const index = arr.indexOf(str);

  if (index !== -1) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  } else {
    return [...arr, str];
  }
}

export function sortEventsByStartDate(events: IEvent[]): IEvent[] {
  const currentDate = new Date();

  // Filter out events with start dates in the past
  const filteredEvents = events.filter((event) => {
    const startDate = new Date(event.startDate);
    return startDate >= currentDate;
  });

  // Sort the filtered events based on the closest start date to the current date
  return filteredEvents.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);

    const timeDiffA = Math.abs(dateA.getTime() - currentDate.getTime());
    const timeDiffB = Math.abs(dateB.getTime() - currentDate.getTime());

    return timeDiffA - timeDiffB;
  });
}
