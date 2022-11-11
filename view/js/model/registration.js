var modelRegistration = (function () {

    function proceedRegistration(RegData) {
        // var RegData = getRegInfo();
        // var error_span = document.getElementById("log-status");
        if (check_valid(RegData)) {
            if ((RegData["password"] != RegData["repeat-password"])){
                // error_span.textContent = "Пароли не совпадают";
                return "Пароли не совпадают";
            }
            sendRequest("post", "api/user/registration", RegData, function () {
                if (this.readyState != 4 | this.status != 200) {
                    return;
                }
                var response = this.responseText;
                if (response == "Yes") {
                    pageAuth.initLogin();
                    return "Регистрация прошла успешно";
                } else {
                    // error_span.textContent = "Нельзя испольовать данный логин";
                    return "Нельзя испольовать данный логин";
                }
            }, false);
        } else {
            return "Не все поля были заполнены";
            // error_span.textContent = "Не все поля были заполнены";
        }
    }

    // function getRegInfo() {
    //     var RegData = {
    //
    //         "login": localStorage.getItem("login"),
    //         "lastName": localStorage.getItem("lastName"),
    //         "name": localStorage.getItem("name"),
    //         "middleName": localStorage.getItem("middleName"),
    //         "password": localStorage.getItem("password"),
    //         "password-repeat": localStorage.getItem("password-repeat")
    //     };
    //
    //     return RegData;
    // }

        return {
            proceedRegistration: proceedRegistration
        }

    }
)();