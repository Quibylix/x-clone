import { Navbar } from "@/components";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("Navbar", () => {
  it("renders a navbar", () => {
    render(<Navbar />);

    screen.getByRole("navigation");
  });

  it("renders links to /home, /explore, /notifications and /messages", () => {
    render(<Navbar />);

    screen.getAllByRole("link", {
      name: /Home|Explore|Notifications|Messages/,
    });
  });
});
