import TextFieldComponent from "@/modules/shared/components/TextFieldComponent";
import { useForm } from "react-hook-form";
import ButtonComponent from "@/modules/shared/components/ButtonComponent";
import { FormValues } from "@/modules/manageEvents/types/formValues";

interface IProps {
  onSubmit: (data: FormValues) => void;
  isLoading: boolean;
}

export default function EventFormComponent(props: IProps) {
  const { onSubmit, isLoading } = props;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <TextFieldComponent
        errors={errors}
        label={"Title"}
        name={"title"}
        control={control}
        rules={{
          required: "This is required",
        }}
      />
      <TextFieldComponent
        errors={errors}
        label={"Description"}
        name={"description"}
        control={control}
        rules={{
          required: "This is required",
        }}
      />
      <TextFieldComponent
        type={"date"}
        errors={errors}
        label={"Start Date"}
        name={"startDate"}
        control={control}
        rules={{
          required: "This is required",
        }}
      />
      <TextFieldComponent
        type={"date"}
        errors={errors}
        label={"End Date"}
        name={"endDate"}
        control={control}
        rules={{
          required: "This is required",
        }}
      />
      <TextFieldComponent
        errors={errors}
        label={"Image"}
        name={"image"}
        control={control}
        rules={{
          required: "This is required",
        }}
        placeholder={"Image URL"}
      />
      <TextFieldComponent
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
