// var pageAuth = (function () {

let root = undefined;
let router = undefined;
function _renderAuth() {
    root.innerHTMLAuth = "<div class='log-page'>" +
        "<div class='log-content'>" +
        "<div class='log'>" +
        "<span>Авторизация</span>" +
        "<div class='login'>" +
        "<label for='login'>Логин</label>" +
        "<input id='login' class='text' type='text' autocomplete='off'>" +
        "<span class='bar'></span>" +
        "</div>" +
        "<div class='password'>" +
        "<label for='password'>Пароль</label>" +
        "<input id='password' class='text' type='password' autocomplete='off'>" +
        "<span class='bar'></span>" +
        "</div>" +
        "<button class='btn-submit' id='btnAuthInfo'>Войти</button>" +
        "<span id='log-status'></span>" +
        "</div>" +
        "<span>Еще нет аккаунта? <button class='btn-path' id='reg'>Зарегистрироваться</button></span>" +
        "</div>" +
        "</div>";
// }
    // function initLogin () {
    //     root.innerHTML = innerHTMLAuth;

        var btnReg = document.getElementById("reg");
        var btnSendAuthInfo = document.getElementById("btnAuthInfo");
        btnReg.addEventListener("click", pageReg.initRegistration);
        var statusReport = document.getElementById("log-status");
        btnSendAuthInfo.addEventListener("click", function () {

            setLoginData();//if check_valid -> proceedAuth

            statusReport = modelAuth.proceedAuth();
        });

        localStorage.clear();
    }

    function _setLoginData() {
        var loginField = document.getElementById("login");
        var login = loginField.value;
        var password = document.getElementById("password").value

        localStorage.setItem("login", login);
        // localStorage.setItem("token", "");
        localStorage.setItem("password", password);
    }

//     return {
//         initLogin: initLogin
//     }
// })();