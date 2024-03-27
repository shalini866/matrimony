interface Match {
    id: string;
    name: string;
    age: number;
    address: string;
    // Add more properties as needed
  }
  
  describe('Navigation Test', () => {
    it('should navigate to the Matches tab, scroll, and hide top button', () => {
        // Visit the justJoined URL
        cy.visit('/matches/match/justJoined');

        // Assert that the URL changes to justJoined
        cy.url().should('include', '/justJoined');

        // Click the Matches tab
        cy.get('.matches-nav-container .tab-nav-bar a').contains('Matches').click();

        // Assert that the URL changes to match/matches
        cy.url().should('include', '/match/matches');

        // Load mock data from fixture and check card details
        cy.fixture('example.json').then((exampleData: { matches: { list: Match[] } }) => {
            // Iterate over each match in the list
            exampleData.matches.list.forEach((match: Match, index: number) => {
                // Trigger mouseover event on the specific .card-content element
                cy.get('.card-content').eq(index).trigger('mouseover');

                // Assert that the card contains the match's name
                cy.contains('.card-content', match.name).should('exist');

                // Assert that the card contains the match's age
                cy.contains('.card-content', `${match.age}`).should('exist');

                // Assert that the card contains the match's address
                cy.contains('.card-content', match.address).should('exist');
               
                cy.wait(10000);

            });
        });

            // Click the button after the data check is completed
            cy.get('.prime-button').click({ force: true });
            
            // visit the prime page 
            cy.visit('http://localhost:4200/#/prime');

            // Wait for the page navigation to complete and then verify the URL
            cy.url().should('include', '/prime');

            // Wait for at least 2 minutes (120,000 milliseconds) on the prime page
             cy.wait(10000);

            //Click the Regular button to go back to original page
            cy.get('.confirmbutton').click({force:true});
            
            cy.visit('http://localhost:4200/#/matches/match/justJoined');

    });
});



  