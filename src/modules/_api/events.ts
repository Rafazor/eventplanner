import apiClient from "@/lib/http-common";

export const getEvents = async () => {
  const res = await apiClient.get("/events");
  return res.data;
};
