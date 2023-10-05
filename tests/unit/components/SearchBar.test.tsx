import { SearchBar } from "@/components";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SearchBar", () => {
  it("renders a form with a label and input", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("Search");
    expect(input.getAttribute("type")).toBe("search");
  });
});
