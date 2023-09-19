import LinkButtonComponent from "@/modules/shared/components/LinkButtonComponent";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LinkButtonComponent", () => {
  it("renders the button correctly", () => {
    const label = "Test link";
    const href = "/test";
    render(<LinkButtonComponent label={label} href={href} />);
    const button = screen.getByText(label);
    expect(button).toBeInTheDocument();
  });
});
