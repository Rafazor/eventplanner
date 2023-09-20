import FieldComponent from "@/modules/shared/components/FieldComponent";
import { render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useForm } from "react-hook-form";

describe("FieldComponent", () => {
  const { result } = renderHook(() => useForm());

  it("renders the field correctly", () => {
    const label = "Test field";
    const name = "test";

    render(
      <FieldComponent
        label={label}
        name={name}
        control={result.current.control}
        errors={null}
      />,
    );
    const field = screen.getByLabelText(label);
    expect(field).toBeInTheDocument();
    expect(field).toHaveAttribute("name", name);
    expect(field).toHaveAttribute("id", name);
  });

  it("renders the correct type", () => {
    const label = "Test field";
    const name = "test";
    const type = "number";

    render(
      <FieldComponent
        label={label}
        name={name}
        control={result.current.control}
        errors={null}
        type={type}
      />,
    );
    const field = screen.getByLabelText(label);
    expect(field).toHaveAttribute("type", type);
  });

  it("renders the correct value", () => {
    const label = "Test field";
    const name = "test";

    render(
      <FieldComponent
        label={label}
        name={name}
        control={result.current.control}
        errors={null}
      />,
    );
    const field = screen.getByLabelText(label);

    expect(field).not.toHaveAttribute("value", "");
  });
});
