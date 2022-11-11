var modelAuth = (function () {

        function proceedAuth() {//для разгрузки localstorage можно в proceedAuth передавать JSON с данными логина
            var loginData = getLoginData();
            // var error_span = document.getElementById("log-status");
            if (check_valid(loginData)) {
                sendRequest("post", "api/user/authorization", loginData, function () {
                    if (this.readyState != 4 | this.status != 200) {
                        return;
                    }
                    var response = this.responseText;
                    // if (response[0] == "Yes") {
                    //         localStorage.setItem("login", loginData.login);
                    //         localStorage.setItem("token", response[1]);
                    //         mainRender();/
                    // }
                    if (response == "Yes") {
                        localStorage.setItem("login", loginData.login);
                        localStorage.setItem("password", loginData.password);
                        mainRender();
                        return "Авторизация прошла успешно"
                    } else {
                        // error_span.textContent = "Неправильный логин или пароль";//вывести как return
                        return "Неправильный логин или пароль";
                    }
                }, false);
            } else {
                return "Не все поля были заполнены";
                // error_span.textContent = "Не все поля были заполнены";
            }
            // myXmlRequest("post", "api/user/authorization", loginData, function (response) {
            //     setTokenFromServ(response);
            // });
        }

        function getLoginData() {
            var loginData = {
                "login": localStorage.getItem("login"),
                "password": localStorage.getItem("password")
                // "token": localStorage.getItem("token")
            };

            return loginData;
        }

        // function setTokenFromServ(response) {
        //     localStorage.setItem("token", response);
        //     pageMain.initMain();
        //
        // }

        return {
            proceedAuth: proceedAuth
        }

    }
)();