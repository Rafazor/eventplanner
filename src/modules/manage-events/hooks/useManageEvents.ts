import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateEventDto,
  EventFormValues,
} from "@/modules/manage-events/types/formValues";
import { createEvent } from "@/services/events";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

export const useManageEvents = () => {
  const router = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationFn: (newEvent: CreateEventDto) => createEvent(newEvent),
    onSuccess: () => {
      router.push("/");
    },
  });

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

    mutate(formattedData);
  };

  return {
    onSubmit,
    isLoading,
    handleSubmit,
    control,
    errors,
  };
};
