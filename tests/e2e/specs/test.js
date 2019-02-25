// https://docs.cypress.io/api/introduction/api.html

describe('Check cart flow', () => {
  it('can add product in cart and remove it', () => {
    // Add twice the first product
    cy.visit('/#/products')
    const firstProduct = cy.get('.product').first()
    const firstProductButton = firstProduct.find('button')
    firstProductButton.click()
    firstProductButton.click()

    // Check cart page
    cy.visit('/#/cart')
    const products = cy.get('.product')
    products.should('have.length', 1)
    products.first().find('.count').contains('x2')

    // Remove products
    cy.get('.product').first().find('button').click()

    // Check that cart is empty
    cy.get('.product').should('have.length', 0)
    cy.contains('Your cart is empty')
  })
})
