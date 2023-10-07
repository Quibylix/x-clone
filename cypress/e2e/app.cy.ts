describe("app general test", () => {
  it("includes the app name in the title", () => {
    cy.visit("http://localhost:3000");

    cy.title().should("contain", "X");
  });

  it("renders a navbar", () => {
    cy.visit("http://localhost:3000");

    cy.get("nav").should("exist");
  });

  it("renders a header", () => {
    cy.visit("http://localhost:3000");

    cy.get("header").should("exist");
  });

  it("renders a button (link) to post", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").contains("Post").should("exist");
  });

  it("renders a search bar", () => {
    cy.visit("http://localhost:3000");

    cy.get("input[type=search]").should("exist");
  });
});
