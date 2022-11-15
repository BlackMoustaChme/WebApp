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