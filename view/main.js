var root = document.body;

function mainRender() {
    root.innerHTML = "<span class='overPage'></span>" +
        "<div class='main-page'>" +
        "<header>" +
        "<div class='start'>" +
        "<span>CarService</span>" +
        "</div>" +
        "<div class='end'>" +
        "<span class='user-login'>Chrnsv</span>" +
        "<button id='btn-logout' class='btn-logout'></button>" +
        "</div>" +
        "</header>" +
        "<div class='wrap-content'>" +
        "<div id='menu'></div>" +
        "<div class='content'>" +
        "<div id='main-content'></div>" +
        "<div id='btn-place'></div>" +
        "</div>" +
        "</div>" +
        "</div>"
    renderMenu();
    // renderAllCars();
    var userLogin = document.getElementsByClassName("user-login")[0];
    var btnLogout = document.getElementById("btn-logout");
    userLogin.textContent = localStorage.getItem("login");
    btnLogout.addEventListener("click", logout);
}

function logout() {
    var animationBlock = document.getElementsByClassName("overPage")[0];
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    // animationCover(animationBlock, 0.5, 0);
    setTimeout(authRender, 800);
}

/* RENDER MENU */

function renderMenu() {
    var menu = document.getElementById("menu");
    // var menu_items = ["Мои машины", "Добавить", "Удалить"];
    var menu_items = ["Мои машины", "Добавить"]
    var list = document.createElement("ul");
    var buttons = [];
    for (var i = 0; i < menu_items.length; i++) {
        var row = document.createElement("li");
        var btn = document.createElement("button");
        btn.textContent = menu_items[i];
        row.appendChild(btn);
        buttons.push(btn);
        list.appendChild(row);
    }
    menu.appendChild(list);
    // buttons[0].addEventListener("click", renderAllCars);
    buttons[0].addEventListener("click", renderUserCar)
    buttons[1].addEventListener("click", renderAddCar);
    // buttons[2].addEventListener("click", renderUserCar);
    // highlightMenu(buttons);
}

/* RENDER CARS */

// function renderAllCars() {
//     sendRequest("post", "api/cars/", null, function () {
//         if (this.readyState != 4 | this.status != 200) {
//             return;
//         }
//         if (this.responseText == "No access") {
//             authRender();
//             return;
//         }
//         var cars = JSON.parse(this.responseText);
//         var mainContent = document.getElementById("main-content");
//         var btnPlace = document.getElementById("btn-place");
//         btnPlace.innerHTML = "";
//         mainContent.innerHTML = "";
//         var columns = ["id", "ownerName", "brand", "model", "color", "number"];
//         var table = create_table(cars, columns);
//         mainContent.appendChild(table);
//     }, true);
// }

function renderUserCar() {
    var jsonLogin = {
        "login": localStorage.getItem("login")
    }
    sendRequest("get", "api/cars/", jsonLogin, function () {
        if (this.readyState != 4 | this.status != 200) {
            return;
        }
        if (this.responseText == "No access") {
            authRender();
            return;
        }
        var products = JSON.parse(this.responseText);
        var mainContent = document.getElementById("main-content");
        var btnPlace = document.getElementById("btn-place");
        var columns = ["id", "ownerName", "brand", "model", "color", "number"];
        var table = create_table(products, columns);
        var button = document.createElement("button");
        button.textContent = "Удалить";
        button.className = "btn-submit";
        button.addEventListener("click", sendDeleteInfo);
        mainContent.innerHTML = "";
        btnPlace.innerHTML = "";
        mainContent.appendChild(table);
        btnPlace.appendChild(button);
        var rows = document.getElementsByTagName("tr");
        //highlightRow(rows);
    }, true);
}

/* DELETE CAR */

// function getDeleteInfo() {
//     var rows = document.getElementsByTagName("tr");
//     var cars_id = [];
//     for (var i = 0; i < rows.length; i++) {
//         if (rows[i].style.background != "") {
//             var cells = rows[i].getElementsByTagName("td");
//             var car = {
//                 id: Number(cells[0].innerText)
//             }
//             cars_id.push(car);
//         }
//     }
//     return cars_id;
// }
//
// function sendDeleteInfo() {
//     var jsonCarsID = getDeleteInfo();
//     sendRequest("delete", "api/cars/", jsonCarsID, function () {
//         if (this.readyState != 4 | this.status != 200) {
//             return;
//         }
//         if (this.responseText == "No access") {
//             authRender();
//             return;
//         }
//         renderUserCar();
//     }, true);
// }

function getDeleteInfo() {
    var jsonLogin = {
        "login": localStorage.getItem("login")
    }
    return jsonLogin;
}

function sendDeleteInfo() {
    var jsonLogin = getDeleteInfo();
    sendRequest("delete", "api/cars/", jsonLogin, function () {
        if (this.readyState != 4 | this.status != 200) {
            return;
        }
        if (this.responseText == "No access") {
            authRender();
            return;
        }
        renderUserCar();
    }, true);
}

/* ADD CAR */

function renderAddCar() {
    var mainContent = document.getElementById("main-content");
    var btnPlace = document.getElementById("btn-place");
    mainContent.innerHTML = "";
    btnPlace.innerHTML = "";
    var fields = ["brand", "model", "color", "number"];
    var fields_ru = ["Марка", "Модель", "Цвет", "Номер"];
    for (var i = 0; i < fields.length; i++) {
        var container = document.createElement("div");
        var input = document.createElement("input");
        input.className = "text";
        input.id = fields[i];
        var label = document.createElement("label");
        label.textContent = fields_ru[i] + ":";
        var span = document.createElement("span");
        span.className = "bar";
        container.className = fields[i];
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(span);
        mainContent.appendChild(container);
    }
    var button = document.createElement("button");
    var span = document.createElement("span");
    span.id = "add-status";
    button.textContent = "Добавить автомобиль";
    button.className = "btn-submit";
    button.addEventListener("click", sendAddCarInfo);
    btnPlace.appendChild(button);
    mainContent.appendChild(span);
}

function getAddCarInfo() {
    var jsonCar = {};
    var fields = ["brand", "model", "color", "number"];
    for (var i = 0; i < fields.length; i++) {
        var value = document.getElementById(fields[i]).value;
        jsonCar[fields[i]] = value;
    }
    jsonCar["ownerName"] = localStorage.getItem("login");
    // jsonCar["cost"] = Number(jsonCar["cost"]);
    return jsonCar;
}

function sendAddCarInfo() {
    var jsonCar = getAddCarInfo();
    var error_span = document.getElementById("add-status");
    if (check_valid(jsonCar)) {
        var fields = Object.keys(jsonCar);
        fields.splice(fields.length - 1, 1);
        for (var i = 0; i < fields.length; i++) {
            document.getElementById(fields[i]).value = "";
        }
        error_span.textContent = "";
        sendRequest("post", "api/cars/", jsonCar, function () {
            if (this.readyState != 4 | this.status != 200) {
                return;
            }
            if (this.responseText == "No access") {
                authRender();
                return;
            }
        }, true);
    } else {
        error_span.textContent = "Не все поля были заполнены";
    }
}