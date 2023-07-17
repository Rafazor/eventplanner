import { IEvent } from "@/shared/types/IEvent";

export const mockEvent: IEvent = {
  id: "1",
  title: "title",
  description: "description",
  image: "image",
  startDate: new Date("2021-09-01T00:00:00.000Z"),
  endDate: new Date("2021-09-01T00:00:00.000Z"),
  categories: ["Cars", "Sport", "Games"],
};

export const mockEvents: IEvent[] = [
  {
    id: "2",
    title: "title",
    description: "description",
    image: "image",
    startDate: new Date("2023-07-19T13:36:55.000Z"),
    endDate: new Date("2021-09-01T00:00:00.000Z"),
    categories: ["Cars", "Sport"],
  },
  {
    id: "1",
    title: "title",
    description: "description",
    image: "image",
    startDate: new Date("2023-07-21T13:36:55.000Z"),
    endDate: new Date("2021-09-01T00:00:00.000Z"),
    categories: ["Cars"],
  },
];
