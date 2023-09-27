describe("app general test", () => {
  it("includes the app name in the title", () => {
    cy.visit("http://localhost:3000");

    cy.title().should("contain", "X");
  });
});
