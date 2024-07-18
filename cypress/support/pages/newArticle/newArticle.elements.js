export class NewArticleElements {

    static get textBoxes() {
        return {
            get articleTitle() {
                return cy.get('input[formcontrolname="title"]')
            },
            get articleAbout() {
                return cy.get('input[formcontrolname="description"]')
            },
            get writeArticle() {
                return cy.get('textarea[formcontrolname="body"]')
            },
            get tags() {
                return cy.get('input[placeholder="Enter tags"]')
            }
        }
    }

    static get buttons() {
        return {
            get published() {
                return cy.get('button[type="button"]')
            }
        }
    }
}


