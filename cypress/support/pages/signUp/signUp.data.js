export class SignUpData {

    // Métodos que generan data de entrada
    static get validCredentials() {
        return {
            username: 'matsenn',
            email: 'matilde@test.com',
            password: 'matitest'
        };
    }

    static get existUsernameCredentials () {
        return {
            username: 'matsenn',
            email: 'matsenn@testing.com',
            password: 'password12333'
        }
    }

    static get existEmailCredentials() {
        return {
            username: 'matitesting',
            email: 'matilde@test.com',
            password: 'password1234'
        }
    }
    
    static get passwordInvalidCredentials() {
        return {
            username: 'usertest1',
            email: 'usertestone@test.com',
            password: ''
        };
    }

    static get usernameInvalidCredentials() {
        return {
            username: '',
            email: 'usernotprovided@test.com',
            password: 'pruebas12345'
        };
    }

    static get emailInvalidCredentials() {
        return {
            username: 'emailnotprovided',
            email: '',
            password: 'pruebas1234'
        }
    }
}