export class FeedElements {
    static get articleTitles() {
        return cy.get('a.author')
    }

    static get followButton() {
        return cy.get('button.action-btn')
    }
}
