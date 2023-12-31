import FieldComponent from "@/modules/shared/components/FieldComponent";
import { Control, FieldErrors } from "react-hook-form";
import ButtonComponent from "@/modules/shared/components/ButtonComponent";
import { EventFormValues } from "@/modules/manage-events/types/formValues";
import { FormEventHandler } from "react";

interface IProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  isLoading: boolean;
  errors: FieldErrors<EventFormValues>;
  control: Control<EventFormValues>;
}

export default function EventFormComponent(props: IProps) {
  const { onSubmit, isLoading, errors, control } = props;

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <FieldComponent
        errors={errors}
        label={"Title"}
        name={"title"}
        control={control}
        rules={{
          required: "This is required",
        }}
      />
      <FieldComponent
        errors={errors}
        label={"Description"}
        name={"description"}
        control={control}
        rules={{
          required: "This is required",
        }}
      />
      <FieldComponent
        type={"datetime-local"}
        errors={errors}
        label={"Start Date"}
        name={"startDate"}
        control={control}
        rules={{
          required: "This is required",
        }}
      />
      <FieldComponent
        type={"datetime-local"}
        errors={errors}
        label={"End Date"}
        name={"endDate"}
        control={control}
        rules={{
          required: "This is required",
        }}
      />
      <FieldComponent
        errors={errors}
        label={"Image"}
        name={"image"}
        control={control}
        rules={{
          required: "This is required",
        }}
        placeholder={"Image URL"}
      />
      <FieldComponent
        errors={errors}
        label={"Categories"}
        name={"categories"}
        control={control}
        rules={{
          required: "This is required",
        }}
        placeholder={"Separate categories with commas: Coding, Music, Social"}
      />
      <ButtonComponent
        disabled={isLoading}
        className="mt-5"
        type="submit"
        label={isLoading ? "Loading" : "Create new event"}
      />
    </form>
  );
}
