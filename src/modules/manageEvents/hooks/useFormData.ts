import { SubmitHandler } from "react-hook-form";
import {
  CreateEventDto,
  FormValues,
} from "@/modules/manageEvents/types/formValues";
import { createEvent } from "@/modules/shared/api/events";
import { useMutation } from "react-query";

export const useFormData = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (newEvent: CreateEventDto) => createEvent(newEvent),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formattedData: CreateEventDto = { ...data, categories: [] };

    if (data.startDate) {
      formattedData.startDate = new Date(data.startDate);
    }
    if (data.endDate) {
      formattedData.endDate = new Date(data.endDate);
    }

    if (data.categories) {
      formattedData.categories = data.categories
        .split(",")
        .map((item: string) => item.trim());
    }

    mutate(formattedData);
  };

  return {
    onSubmit,
    isLoading,
  };
};
