import {User} from "../../model/transport/user.js";
import {proceedAuth} from "../../model/authorization.js";
import {Router} from "../router.js";
import {check_valid} from "../../util/globalUtil.js";
// сделать полное разделение вью и модели
// Убрать реакцию в модель и оставить рендер, сбор и передачу данных
// Можно сделать классы для вьюшек с методом render
let root = undefined;
let router = undefined;
let error_span = undefined;
function _renderAuth() {
    root.innerHTML = "<div class='log-page'>" +
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

        let btnReg = document.getElementById("reg");
        let btnSendAuthInfo = document.getElementById("btnAuthInfo");
        // let error_span = document.getElementById("log-status");
        btnReg.addEventListener("click", () => {
            router.pageReg(root)
        });
        btnSendAuthInfo.addEventListener("click", () => {
            let authInfo = _setLoginData();
            console.log(authInfo);
            proceedAuth(authInfo).then((responseData) => {
                _reactAuthInfo(responseData);
            });
        });
    }

    function _setLoginData() {

        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;
        let error_span = document.getElementById("log-status");

        let jsonAuthInfo = {
            "login": login,
            "password": password
        }
        if(!check_valid(jsonAuthInfo)) {
            error_span.textContent = "Не все поля были заполнены";
            return;
        }
        else {
            // let user = new User(jsonAuthInfo["login"], null, null, null, jsonAuthInfo["password"]);
            let user = new User(login, null, null, null, password);
            return user;
        }

    }

    function _reactAuthInfo(responseData) {
        console.log(responseData)
        let status = responseData["status"];
        console.log(status);
        let data = responseData["data"];
        console.log(data);
        let error_span = document.getElementById("log-status");

        if (status == 400) {
            error_span.textContent = "Неправильный логин или пароль";
        } else if (status == 200) {
            console.log(data["token"]);
            // localStorage.setItem("token", data["token"]);
            localStorage.setItem("token", data)
            localStorage.setItem("login", _setLoginData().getLogin());
            router.pageMain(root);
        }
    }

    export default function init(_root) {
        root = _root;
        router = new Router();
        _renderAuth();
    }

//     return {
//         initLogin: initLogin
//     }
// })();