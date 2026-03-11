describe('template spec', () => {
  it('Butonlara tıklandığında sipariş sayfasına yönlendiriliyor mu?', () => {

    cy.visit("http://localhost:5173");

    cy.get('[data-cy="order-button"]').then(($buttons) => {
      const count = $buttons.length;

      for (let i = 0; i < count; i++) {
        cy.get('[data-cy="order-button"]').eq(i).click()
        cy.url().should("include", "/order")
        cy.go("back")
      }
    })
  })
  it("Boyut seçilmeden sipariş verilemez!", () => {

    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="size-s"]').should("not.be.checked");
    cy.get('[data-cy="size-m"]').should("not.be.checked");
    cy.get('[data-cy="size-l"]').should("not.be.checked");

    cy.get('[data-cy="submit-order"]:visible').click();


    cy.url().should("not.include", "/success");

  })

  it("Hamur kalınlığı seçilmeden sipariş verilemez!", () => {

    cy.visit("http://localhost:5173/order")
    cy.get('[data-cy="dough-select"]').select("ince")
    cy.get('[data-cy="submit-order"]:visible').click();
    cy.url().should("not.include", "/success")

  })

  it("4'ten az malzeme seçilemez", () => {

    cy.visit("http://localhost:5173/order")

    cy.get('[data-cy="size-m"]').check()
    cy.get('[data-cy="dough-select"]').select("ince")

    cy.get('input[name="malzeme"]').eq(0).check()
    cy.get('input[name="malzeme"]').eq(1).check()
    cy.get('input[name="malzeme"]').eq(2).check()

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("En az 4 malzeme")
    })

    cy.get('[data-cy="submit-order"]:visible').click()

  })

  it("10'dan fazla malzeme seçilemez", () => {

    cy.visit("http://localhost:5173/order")
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("En fazla 10 malzeme")
    })
    cy.get('input[name="malzeme"]').each(($el, index) => {
      if (index < 10) {
        cy.wrap($el).check()
      }
    })
    cy.get('input[name="malzeme"]').eq(10).check({ force: true })

  })
  it("Geçerli seçimlerle sipariş verildiğinde success sayfasına yönleniyor mu?", () => {

    cy.visit("http://localhost:5173/order")

    cy.get('[data-cy="size-m"]').check()
    cy.get('[data-cy="dough-select"]').select("ince")

    cy.get('input[name="malzeme"]').eq(0).check()
    cy.get('input[name="malzeme"]').eq(1).check()
    cy.get('input[name="malzeme"]').eq(2).check()
    cy.get('input[name="malzeme"]').eq(3).check()

    cy.get('[data-cy="submit-order"]:visible').click()

    cy.url().should("include", "/success")

  })
})