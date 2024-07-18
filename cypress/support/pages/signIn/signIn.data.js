export class SignInData {

    static get invalidCredentials() {
        return {
            username: 'abc',
            password: 'abc'
        };
    }
    static get validCredentials() {
        return {
            username: 'estefi@pruebas.com',
            password: 'estefitest'
        };
    }
}