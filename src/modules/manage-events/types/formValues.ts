import { IEvent } from "@/modules/shared/types/IEvent";

export type EventFormValues = Pick<
  IEvent,
  "title" | "description" | "startDate" | "endDate" | "image"
> & { categories: string };

export type CreateEventDto = Pick<
  IEvent,
  "title" | "description" | "startDate" | "endDate" | "image" | "categories"
>;
