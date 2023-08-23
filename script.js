describe("Internship Application Form", () => {
  const baseUrl = "your_base_url_here"; // Replace with your actual base URL

  it("should render the form with correct elements and attributes", () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("#first-name-input").should("have.attr", "type", "text");
    cy.get("#last-name-input").should("have.attr", "type", "text");
    cy.get("#email-input").should("have.attr", "type", "email");
    cy.get("#college-input").should("have.attr", "type", "text");
    cy.get("#roll-no-input").should("have.attr", "type", "text");
    cy.get("#graduation-year-input").should("have.attr", "type", "text"); // Update this to "select" if needed
    cy.get("#conditions-checkbox").should("have.attr", "type", "checkbox");
  });

  it("should validate form elements and show error messages", () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("#first-name-input").should("have.class", "form-control");
    cy.get("#last-name-input").should("have.class", "form-control");
    cy.get("#email-input").should("have.class", "form-control");
    cy.get("#college-input").should("have.class", "form-control");
    cy.get("#roll-no-input").should("have.class", "form-control");
    // Update this part to match the actual ID of the graduation year input
    cy.get("#graduation-year-input").should("have.class", "form-control");
    cy.get("#conditions-checkbox").should("have.class", "form-check-input");

    cy.get("#first-name-input").siblings(".invalid-feedback");
    cy.get("#last-name-input").siblings(".invalid-feedback");
    cy.get("#email-input").siblings(".invalid-feedback");
    cy.get("#college-input").siblings(".invalid-feedback");
    cy.get("#roll-no-input").siblings(".invalid-feedback");
    // Update this part to match the actual ID of the graduation year input
    cy.get("#graduation-year-input").siblings(".invalid-feedback");
    cy.get("#conditions-checkbox").siblings(".invalid-feedback");
  });

  it("should contain correct graduation year options", () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("#graduation-year-input").find("option").should("have.length", 4);
    cy.get("#graduation-year-input").should("contain", "2020");
    cy.get("#graduation-year-input").should("contain", "2021");
    cy.get("#graduation-year-input").should("contain", "2022");
    cy.get("#graduation-year-input").should("contain", "2023");
  });

  it("should require all required fields", () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("#first-name-input").should("have.attr", "required");
    cy.get("#last-name-input").should("have.attr", "required");
    cy.get("#email-input").should("have.attr", "required");
    cy.get("#college-input").should("have.attr", "required");
    // Update this part to match the actual ID of the graduation year input
    cy.get("#graduation-year-input").should("have.attr", "required");
    cy.get("#roll-no-input").should("have.attr", "required");
    cy.get("#conditions-checkbox").should("have.attr", "required");
  });

  it("should have correct labels for form fields", () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("[for=first-name-input]").should("have.class", "form-label");
    cy.get("[for=last-name-input]").should("have.class", "form-label");
    // Update this part to match the actual ID of the graduation year input
    cy.get("[for=graduation-year-input]").should("have.class", "form-label");
  });
});
