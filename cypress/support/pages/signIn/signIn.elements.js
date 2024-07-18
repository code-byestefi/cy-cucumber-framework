export class SignInElements {

    static get textBoxes() {
        return {
            get username() {
                return cy.get('input[formcontrolname="email"]')
            },
            get password() {
                return cy.get('input[formcontrolname="password"]')
            }
        }
    }

    static get buttons() {
        return {
            get login() {
                return cy.get('button[type="submit"]')
            },
        }
    }

}