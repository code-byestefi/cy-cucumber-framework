export class CommonElements {

    static get topMenu() {
        return {
            get home() {
                return cy.contains('a', ' Home ')
            },
            get signIn() {
                return cy.get('a[href="/login"]')
            },
            get signUp() {
                return cy.get('a[href="/register"]')
            }
        }
    }
    
    static get signedFeed() {
        return cy.contains('a', ' Global Feed ')
    }
}