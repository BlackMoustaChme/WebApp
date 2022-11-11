var pageReg = (function () {
    var innerHTMLReg = "<div class='log-page'>" +
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

    function initRegistration () {
        root.innerHTML = innerHTMLReg;

        var btnAuth = document.getElementById("auth");
        var btnReg = document.getElementById("btnRegInfo");
        var statusReport = document.getElementById("log-status");
        btnAuth.addEventListener("click", pageAuth.initLogin);
        btnReg.addEventListener("click", function () {


            var jsonRegInfo = setRegistrationData();
            statusReport = modelRegistration.proceedRegistration(jsonRegInfo);

        });

        // localStorage.clear();
    }

    function setRegistrationData() {
        // var login = document.getElementById("login").value
        // var lastname = document.getElementById("lastName").value
        // var name = document.getElementById("name").value
        // var middlename = document.getElementById("middleName").value
        // var password = document.getElementById("password").value
        // var repeat_password = document.getElementById("password-repeat").value
        //
        // localStorage.setItem("login", login);
        // localStorage.setItem("lastName", lastname);
        // localStorage.setItem("name", name);
        // localStorage.setItem("middleName", middlename);
        // localStorage.setItem("password", password);
        // localStorage.setItem("password-repeat", repeat_password);
        var login = document.getElementById("login").value
        var lastname = document.getElementById("lastName").value
        var name = document.getElementById("name").value
        var middlename = document.getElementById("middleName").value
        var password = document.getElementById("password").value
        var repeat_password = document.getElementById("password-repeat").value
        var jsonRegInfo = {
            "login": login,
            "lastName": lastname,
            "name": name,
            "middleName": middlename,
            "password": password,
            "repeat-password": repeat_password
        }
        return jsonRegInfo;
    }

    return {
        initRegistration: initRegistration
    }
})();