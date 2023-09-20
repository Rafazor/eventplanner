import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateEventDto,
  EventFormValues,
} from "@/modules/manage-events/types/formValues";

export const useEventForm = (
  onSubmitCallback: (formattedData: CreateEventDto) => void,
) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EventFormValues>();

  const onSubmit: SubmitHandler<EventFormValues> = (data) => {
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

    onSubmitCallback(formattedData);
  };

  return {
    onSubmit,
    handleSubmit,
    control,
    errors,
  };
};
