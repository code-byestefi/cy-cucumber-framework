import { SignInData} from './signIn.data';
import { SignInElements } from './signIn.elements';
import { CommonMethods } from './../common/common.methods';

export class SignInMethods {

    static insertUsername(username){
        SignInElements.textBoxes.username.type(username).trigger('input').trigger('change');
    }

    static insertPassword(password) {
        SignInElements.textBoxes.password.type(password).trigger('input').trigger('change');
    }

    static clickOnSignInButton() {
        SignInElements.buttons.login.click()
    }

    static login(username,password) {
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSignInButton()
    }

    static verifyWrongPasswordMessage() {
        CommonMethods.verifyAlert('Wrong password.')
    }
}