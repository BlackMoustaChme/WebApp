import {User} from "../../model/transport/user.js";
import {Router} from "../router.js";
import {proceedRegistration} from "../../model/registration.js";
import {check_valid} from "../../util/globalUtil.js";
// сделать полное разделение вью и модели
// Убрать реакцию в модель и оставить рендер, сбор и передачу данных
// Можно сделать классы для вьюшек с методом render
let root = undefined;
let router = undefined;
let error_span = undefined;

function _renderReg() {
    root.innerHTML = "<div class='log-page'>" +
        "<div class='log-content'>" +
        "<div class='log'>" +
        "<span>Регистрация</span>" +
        "<div class='login'>" +
        "<label for='login'>Логин</label>" +
        "<input id='login' class='text' type='text' autocomplete='off'>" +
        "<span class='bar'></span>" +
        "</div>" +
        "<div class='lastName'>" +
        "<label for='lastName'>Фамилия</label>" +
        "<input id='lastName' class='text' type='text' autocomplete='off'>" +
        "<span class='bar'></span>" +
        "</div>" +
        "<div class='name'>" +
        "<label for='name'>Имя</label>" +
        "<input id='name' class='text' type='text' autocomplete='off'>" +
        "<span class='bar'></span>" +
        "</div>" +
        "<div class='middleName'>" +
        "<label for='middleName'>Отчество</label>" +
        "<input id='middleName' class='text' type='text' autocomplete='off'>" +
        "<span class='bar'></span>" +
        "</div>" +
        "<div class='password'>" +
        "<label for='password'>Пароль</label>" +
        "<input id='password' class='text' type='password' autocomplete='off'>" +
        "<span class='bar'></span>" +
        "</div>" +
        "<div class='password'>" +
        "<label for='password-repeat'>Подтвердите пароль</label>" +
        "<input id='password-repeat' class='text' type='password' autocomplete='off'>" +
        "<span class='bar'></span>" +
        "</div>" +
        "<button class='btn-submit' id='btnRegInfo'>Зарегистрироваться</button>" +
        "<span id='log-status'></span>" +
        "</div>" +
        "<span>Уже есть аккаунт? <button class='btn-path' id='auth'>Авторизоваться</button></span>" +
        "</div>" +
        "</div>";
    // let fadeBlock = document.getElementsByClassName("log-content")[0];
    let btnAuth = document.getElementById("auth");
    let btnReg = document.getElementById("btnRegInfo");
    // let error_span = document.getElementById("log-status");
    btnAuth.addEventListener("click", () => {
        router.pageAuth(root)
    });
    btnReg.addEventListener("click", () => {
        let regInfo = _setRegistrationData();
        proceedRegistration(regInfo).then((response) => {
            _reactRegInfo(response);
        });


    });
    // animationFade(fadeBlock, 1, 0);
}

function _setRegistrationData() {
    let error_span = document.getElementById("log-status");
    let login = document.getElementById("login").value
    let lastname = document.getElementById("lastName").value
    let name = document.getElementById("name").value
    let middlename = document.getElementById("middleName").value
    let password = document.getElementById("password").value
    let repeat_password = document.getElementById("password-repeat").value
    let jsonRegInfo = {
        "login": login,
        "lastName": lastname,
        "name": name,
        "middleName": middlename,
        "password": password,
        "repeat-password": repeat_password
    }
    if (check_valid(jsonRegInfo)) {
        if ((jsonRegInfo["password"] != jsonRegInfo["repeat-password"])) {
            error_span.textContent = "Пароли не совпадают";
        }
        // let user = new User(jsonRegInfo["login"], jsonRegInfo["lastName"], jsonRegInfo["name"], jsonRegInfo["middleName"], jsonRegInfo["password"]);
        let user = new User(login, lastname, name, middlename, password);
        return user;
    } else {
        error_span.textContent = "Не все поля были заполнены";
        return;
    }
}

function _reactRegInfo(response) {
    let status = response["status"];
    let error_span = document.getElementById("log-status");
    if (status == 400) {
        error_span.textContent = "Нельзя испольовать данный логин";
    } else if (status == 200) {
        // localStorage.setItem("token", data["token"]);
        // localStorage.setItem("login", _setRegistrationData().getLogin());
        router.pageAuth(root);
    }
}

export default function init(_root) {
    root = _root;
    router = new Router();
    _renderReg();
}
