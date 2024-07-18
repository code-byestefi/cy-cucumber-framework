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

    static get topMenuAccount() {
        return {
            get home() {
                return cy.contains('a', ' Home ')
            },
            get newArticle() {
                return cy.get('a[href="/editor"]')
            },
            get settings() {
                return cy.get('a[href="/settings"]')
            },
            get account() {
                return cy.get('a[routerlinkactive="active"]').eq(3)
            }
        }
    }
    
    static get signedFeed() {
        return cy.contains('a', ' Global Feed ')
    }
}

