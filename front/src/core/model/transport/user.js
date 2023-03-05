export class User {
    login;
    lastName;
    name;
    middleName;
    password;
    // repeat_password;

    // constructor(login, password) {
    //     this.login = login;
    //     this.password = password;
    // }

    constructor(login, lastName, name, middleName, password) {
        this.login = login;
        this.lastName = lastName;
        this.name = name;
        this.middleName = middleName;
        this.password = password;
        // this.repeat_password = repeat_password;
    }


    setLogin(login) {
        this.login = login;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setName(name) {
        this.name = name;
    }

    setMiddleName(middleName) {
        this.middleName = middleName;
    }

    setPassword(password) {
        this.password = password;
    }

    // setRepeatPassword(repeat_password) {
    //     this.repeat_password = repeat_password;
    // }

    getLogin() {
       return this.login;
    }

    getLastName() {
        return this.lastName;
    }

    getName() {
        return this.name;
    }

    getMiddleName() {
        return this.middleName;
    }

    getPassword() {
        return this.password;
    }

    // getRepeatPassword() {
    //     return this.repeat_password;
    // }

}