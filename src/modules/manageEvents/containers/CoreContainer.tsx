import EventFormComponent from "@/modules/manageEvents/components/EventFormComponent";
import { useFormData } from "@/modules/manageEvents/hooks/useFormData";

export default function CoreContainer() {
  const { onSubmit, isLoading } = useFormData();

  return (
    <div>
      <EventFormComponent onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
}
