import apiClient from "@/lib/http-common";
import { CreateEventDto } from "@/modules/manageEvents/types/formValues";

export const getEvents = async () => {
  const res = await apiClient.get("/events");
  return res.data;
};

export const createEvent = async (data: CreateEventDto) => {
  const res = await apiClient.post("/events", data);
  return res.data;
};
