import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { CreateEventDto } from "@/modules/manage-events/types/formValues";
import { createEvent } from "@/modules/shared/services/events";

export const useEvent = () => {
  const router = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationFn: (newEvent: CreateEventDto) => createEvent(newEvent),
    onSuccess: () => {
      router.push("/");
    },
  });

  return { mutate, isLoading };
};
