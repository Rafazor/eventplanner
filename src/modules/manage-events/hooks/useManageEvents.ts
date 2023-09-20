import { useEventForm } from "@/modules/manage-events/hooks/useEventForm";
import { useEvent } from "@/modules/manage-events/hooks/useEvent";

export const useManageEvents = () => {
  const { mutate, isLoading } = useEvent();
  const { control, errors, handleSubmit, onSubmit } = useEventForm(mutate);

  return {
    onSubmit,
    isLoading,
    handleSubmit,
    control,
    errors,
  };
};
