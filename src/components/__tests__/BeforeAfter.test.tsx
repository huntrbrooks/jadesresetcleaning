/* eslint-disable @next/next/no-img-element */
import { fireEvent, render, screen } from "@testing-library/react";
import type { ImgHTMLAttributes } from "react";
import { describe, expect, it, vi } from "vitest";
import BeforeAfterSection from "../BeforeAfter";

// Next/Image is mocked to a regular img tag for lightweight component tests.
vi.mock("next/image", () => ({
  default: (allProps: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
    const { fill, ...props } = allProps;
    void fill;
    return <img {...props} alt={props.alt ?? ""} />;
  },
}));

describe("BeforeAfterSection", () => {
  it("renders the comparison heading and two sliders", () => {
    render(<BeforeAfterSection />);

    expect(
      screen.getByRole("heading", { name: "See the Difference" })
    ).toBeTruthy();
    expect(screen.getAllByRole("slider")).toHaveLength(2);
  });

  it("updates slider position using keyboard controls", () => {
    render(<BeforeAfterSection />);

    const slider = screen.getAllByRole("slider")[0];
    expect(slider.getAttribute("aria-valuenow")).toBe("50");

    fireEvent.keyDown(slider, { key: "ArrowRight" });
    expect(slider.getAttribute("aria-valuenow")).toBe("52");

    fireEvent.keyDown(slider, { key: "Home" });
    expect(slider.getAttribute("aria-valuenow")).toBe("0");

    fireEvent.keyDown(slider, { key: "End" });
    expect(slider.getAttribute("aria-valuenow")).toBe("100");
  });
});
