import apiClient from "@/lib/http-common";
import { CreateEventDto } from "@/modules/manage-events/types/formValues";

const EVENTS_ENDPOINT = "/events";

export const getEvents = async () => {
  const res = await apiClient.get(EVENTS_ENDPOINT);
  return res.data;
};

export const createEvent = async (data: CreateEventDto) => {
  const res = await apiClient.post(EVENTS_ENDPOINT, data);
  return res.data;
};
