import EventFormComponent from "@/modules/manage-events/components/EventFormComponent";
import { useManageEvents } from "@/modules/manage-events/hooks/useManageEvents";

export default function CoreContainer() {
  const { onSubmit, isLoading, handleSubmit, control, errors } =
    useManageEvents();

  return (
    <EventFormComponent
      onSubmit={handleSubmit(onSubmit)}
      isLoading={isLoading}
      control={control}
      errors={errors}
    />
  );
}
