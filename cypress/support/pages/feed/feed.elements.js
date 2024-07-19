export class FeedElements {
    static get articleTitles() {
        return cy.get('a.author')
    }

    static get followButton() {
        return cy.get('button.action-btn')
    }

    static get tagsList() {
        return cy.get('div.tag-list a.tag-pill');
    }

    static get tagTab() {
        return cy.get('a.nav-link.active'); 
    }

    static get articlePreviews() {
        return cy.get('div.article-preview'); 
    }

}
