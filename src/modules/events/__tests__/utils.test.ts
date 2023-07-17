import {
  extractUniqueCategories,
  filterEventsByCategory,
  formatDate,
  toggleStringInArray,
} from "@/modules/events/utils/eventsUtil";
import { mockEvents } from "@/mockData/events";

describe("Helper Functions", () => {
  const events = mockEvents;

  describe("extractUniqueCategories", () => {
    it("returns an array of unique categories", () => {
      const uniqueCategories = extractUniqueCategories(events);
      expect(uniqueCategories).toEqual(["Cars", "Sport"]);
    });
  });

  describe("filterEventsByCategory", () => {
    it("returns an array of events filtered by category", () => {
      const filteredEvents = filterEventsByCategory(events, "Cars");
      expect(filteredEvents).toEqual(mockEvents);
    });
  });

  describe("toggleStringInArray", () => {
    it("adds the string to the array if it does not exist", () => {
      const newArray = toggleStringInArray(["item1", "item2"], "item3");
      expect(newArray).toEqual(["item1", "item2", "item3"]);
    });

    it("removes the string from the array if it exists", () => {
      const newArray = toggleStringInArray(
        ["item1", "item2", "item3"],
        "item2",
      );
      expect(newArray).toEqual(["item1", "item3"]);
    });
  });

  describe("formatDate", () => {
    it("returns the formatted date string with ordinal indicator", () => {
      const date = new Date("2023-07-21T13:36:55.000Z");

      // Expected formatted date string
      const expectedFormattedDate = "July 21st | 16:36";

      const formattedDate = formatDate(date);

      expect(formattedDate).toBe(expectedFormattedDate);
    });
  });
});
