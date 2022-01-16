describe('index', function () {
  it('returns page', function () {
    cy.visit({ url: '/' });
    cy.contains('h1', 'Hello world!');
  });
});
