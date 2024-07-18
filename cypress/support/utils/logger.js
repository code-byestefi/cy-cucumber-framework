export class Logger {

    static step(description) {
        const text = `Step - ${description}`
        cy.log(text)
    }

    static verification(description) {
        const text = `Verification - ${description}`
        cy.log(text)
    }


}