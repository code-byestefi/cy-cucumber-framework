import {SignUpElements} from './signUp.elements';

export class SignUpMethods {
    static insertUsername(username){
        SignUpElements.textBoxes.username.type(username).trigger('input').trigger('change');
    }

    static insertEmail(email){
        SignUpElements.textBoxes.email.type(email).trigger('input').trigger('change');
    }

    static insertPassword(password) {
        SignUpElements.textBoxes.password.type(password).trigger('input').trigger('change');
    }

    static clickOnSignUpButton() {
        SignUpElements.buttons.login.click()
    }

    static register(username, email, password) {
        this.insertUsername(username),
        this.insertEmail(email),
        this.insertPassword(password)
    }
}