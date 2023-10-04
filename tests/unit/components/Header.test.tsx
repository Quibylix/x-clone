import { Header } from "@/components";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, it, vi } from "vitest";

beforeAll(() => {
  vi.mock("next/navigation", () => ({
    ...vi.importActual("next/navigation"),
    usePathname: () => "/",
  }));
});

describe("Header", () => {
  it("renders the header", () => {
    render(<Header />);

    screen.getByRole("banner", { name: "Home" });
  });

  it("renders two links, one for 'For you' and one for 'Following'", () => {
    render(<Header />);

    screen.getByRole("link", { name: "For you" });
    screen.getByRole("link", { name: "Following" });
  });
});
