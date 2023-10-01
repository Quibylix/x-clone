import { HomeIcon, NavbarLink } from "@/components";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("NavbarLink", () => {
  it("renders the label and a link with the given href", () => {
    render(<NavbarLink href="/home" label="Home" />);

    screen.getByText("Home");
    expect(screen.getByRole("link").getAttribute("href")).toBe("/home");
  });

  it("renders the right icon for the given label", () => {
    const { container: svgContainer } = render(<HomeIcon />);

    const homeIconCode = svgContainer.querySelector("svg")!.outerHTML;

    cleanup();

    const { container: homeLinkContainer } = render(
      <NavbarLink href="/home" label="Home" />,
    );

    screen.getByText("Home");
    expect(homeLinkContainer.innerHTML).toContain(homeIconCode);

    cleanup();

    const { container: exploreLinkContainer } = render(
      <NavbarLink href="/explore" label="Explore" />,
    );

    expect(exploreLinkContainer.innerHTML).not.toContain(homeIconCode);
  });
});
