import ButtonComponent from "@/modules/shared/components/ButtonComponent";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ButtonComponent", () => {
  it("renders the button correctly", () => {
    const label = "Test Button";
    render(<ButtonComponent label={label} />);

    const button = screen.getByText(label);
    expect(button).toBeInTheDocument();
  });

  it("renders the button with default values", () => {
    const label = "Test Button";
    render(<ButtonComponent label={label} />);

    const button = screen.getByText(label);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).not.toBeDisabled();
  });

  it("renders the button label correctly", () => {
    const label = "Test Button";
    render(<ButtonComponent label={label} type="button" />);

    const button = screen.getByText(label);
    expect(button).toBeInTheDocument();
  });

  it("renders the button type correctly", () => {
    const label = "Test Button";
    const type = "submit";
    render(<ButtonComponent label={label} type={type} />);
    const button = screen.getByText(label);
    expect(button).toHaveAttribute("type", type);
  });

  it("renders the button disabled correctly", () => {
    const label = "Test Button";
    const disabled = true;
    render(<ButtonComponent label={label} disabled={disabled} />);
    const button = screen.getByText(label);
    expect(button).toBeDisabled();
  });

  it("renders the button with custom class correctly", () => {
    const label = "Test Button";
    const className = "custom-class";
    render(<ButtonComponent label={label} className={className} />);
    const button = screen.getByText(label);
    expect(button).toHaveClass(className);
  });

  it("calls onClick when clicking on the button", () => {
    const label = "Test Button";
    const onClick = jest.fn();
    render(<ButtonComponent label={label} onClick={onClick} />);
    const button = screen.getByText(label);
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
