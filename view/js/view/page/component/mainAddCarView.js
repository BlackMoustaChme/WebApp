import { addCar } from "../../../model/main.js";
import { check_valid } from "../../../util/globalUtil.js";
import {Car} from "../../../model/transport/car.js";
import {Router} from "../../router.js";
// import initCar from "./mainUserCarView";

let localRoot = undefined;
let globalRoot = undefined;
// let car = undefined;
let router = undefined;

function _renderAddCar() {
    // root = _root;
    localRoot.innerHTML = "";
    let div_cars = document.createElement("div");
    div_cars.id = "cars";
    let btnPlace = document.createElement("div");
    btnPlace.id = "btn-place";

    // let mainContent = document.getElementById("main-content");
    // let btnPlace = document.getElementById("btn-place");
    // mainContent.innerHTML = "";
    // btnPlace.innerHTML = "";
    let fields = ["brand", "model", "color", "number"];
    let fields_ru = ["Марка", "Модель", "Цвет", "Номер"];
    for (let i = 0; i < fields.length; i++) {
        let container = document.createElement("div");
        let input = document.createElement("input");
        input.className = "text";
        input.id = fields[i];
        let label = document.createElement("label");
        label.textContent = fields_ru[i] + ":";
        let span = document.createElement("span");
        span.className = "bar";
        container.className = fields[i];
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(span);
        div_cars.appendChild(container);
    }
    let button = document.createElement("button");
    let span = document.createElement("span");
    span.id = "add-status";
    button.textContent = "Добавить автомобиль";
    button.className = "btn-submit";
    button.addEventListener("click", () => {
        let carInfo = _setAddCarInfo();
        console.log(carInfo)
        addCar(carInfo).then( (response) => {
            _reactCarInfo(response);
        });
    });
    btnPlace.appendChild(button);
    div_cars.appendChild(span);
    localRoot.appendChild(div_cars);
    localRoot.appendChild(btnPlace)
}

function _setAddCarInfo() {
    let jsonCar = {};
    let error_span = document.getElementById("add-status");
    let fields = ["brand", "model", "color", "number"];
    for (let i = 0; i < fields.length; i++) {
        let value = document.getElementById(fields[i]).value;
        jsonCar[fields[i]] = value;
    }
    if (check_valid(jsonCar)) {
        let fields = Object.keys(jsonCar);
        fields.splice(fields.length - 1, 1);
        for (let i = 0; i < fields.length; i++) {
            document.getElementById(fields[i]).value = "";
        }
        error_span.textContent = "";
    } else {
        error_span.textContent = "Не все поля были заполнены";
    }
    jsonCar["ownerName"] = localStorage.getItem("login");
    console.log(jsonCar);
    let car = new Car(null, jsonCar["ownerName"], jsonCar["brand"], jsonCar["model"], jsonCar["color"], jsonCar["number"]);
    return car;
    // jsonCar["cost"] = Number(jsonCar["cost"]);
    // return jsonCar;

}

function _reactCarInfo(response) {
    let status = response["status"];

    if (status == 401) {
        // error_span.textContent = "Неправильный логин или пароль";
        router.pageAuth(globalRoot);
    } else if (status == 200) {
        router.pageMain(globalRoot);
    }
}

export default function initAddCar(mainRoot, componentRoot) {
    localRoot = componentRoot;
    globalRoot = mainRoot;
    router = new Router();
    _renderAddCar();
}