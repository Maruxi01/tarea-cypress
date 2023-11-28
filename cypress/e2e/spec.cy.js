describe('Candymapper: Contact form', () => {
  it('should complete and send contact form', () => {
    cy.visit('')
    //Cerrar popup de home
    cy.get('[id=popup-widget37723-close-icon]').click()
    //Verificar si existe el formulario, si no existe, reintenta
    cy.get('form[data-ux=Form]').should('be.visible').reload();
    //Completar formulario
    cy.get('input[data-aid=CONTACT_FORM_NAME]').type('Holas')
    cy.get('input[data-aid=CONTACT_FORM_EMAIL]').type('email@email.com')
    cy.get('textarea[data-aid=CONTACT_FORM_MESSAGE]').type('Holas dsakdkasjfkajfkdsjfkladj')
    //Enviar formulario
    cy.get('button[data-aid=CONTACT_SUBMIT_BUTTON_REND]').click()
  })

  it('should show an error message when email is not valid', () => {
    cy.visit('')
    //Cerrar popup de home
    cy.get('[id=popup-widget37723-close-icon]').click()
    //Verificar si existe el formulario, si no existe, reintenta
    cy.get('form[data-ux=Form]').should('be.visible').reload();
    //Completar formulario
    cy.get('input[data-aid=CONTACT_FORM_NAME]').type('Holas')
    cy.get('input[data-aid=CONTACT_FORM_EMAIL]').type('emaildafag')
    cy.get('textarea[data-aid=CONTACT_FORM_MESSAGE]').type('Holas dsakdkasjfkajfkdsjfkladj')
    //Verificar mensaje de error
    cy.get('p[role=alertdialog]').should('be.visible').should('have.text', 'Please enter a valid email address.')
  
  })
})

describe('Candymapper: Visit 3 pages', () => {
  it('should visit 3 pages and expect the last one to be the expected', () => {
    cy.visit('halloween-party')
    cy.get('[id=popup-widget49309-close-icon]').click()

    cy.visit('')

    cy.visit('find-my-candy')

    cy.url().should('include', '/find-my-candy')
 
  })
})