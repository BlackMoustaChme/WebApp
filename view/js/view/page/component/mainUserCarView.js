import {getUserCars} from "../../../model/main.js";
import {deleteAllCars} from "../../../model/main.js";
import {Car} from "../../../model/transport/car.js";
import {create_table} from "../../../util/globalUtil.js";
import {Router} from "../../router.js";
//написать set для carInfo и использовать его вместо react
let localRoot = undefined;
let globalRoot = undefined;
let cars = undefined;
let router = undefined;

// let error_span = undefined

function _getInfo() {
    getUserCars().then((response) => {
        _reactCarInfo(response);
    });
}

function _reactCarInfo(response) {
    let status = response["status"];
    console.log(response["data"]);
    let data = response["data"];

    if (status == 401) {
        // router = new Router();
        router.pageAuth(globalRoot);
    } else if (status == 200) {
        // cars = JSON.parse(data.textContent)
        cars = data
        _renderUserCar();
        // let car = data;
        // return car;
    }
}

function _reactDelete(response) {
    let status = response["status"];

    if (status == 401) {
        router.pageAuth(globalRoot);
    } else if (status == 200) {
        router.pageMain(globalRoot);

    }
}

function _renderUserCar() {
    // let jsonLogin = {
    //     "login": localStorage.getItem("login")
    // }
    // sendRequest("get", "api/cars/", jsonLogin, function () {
    //     if (this.readyState != 4 | this.status != 200) {
    //         return;
    //     }
    //     if (this.responseText == "No access") {
    //         authRender();
    //         return;
    //     }
    // root = _root;
    localRoot.innerHTML = "";
    let div_cars = document.createElement("div");
    div_cars.id = "cars";
    let btnPlace = document.createElement("div");
    btnPlace.id = "btn-place";
    // console.log(cars)
    let columns = ["id", "ownerName", "brand", "model", "color", "number"];
    let table = create_table(cars, columns);
    let button = document.createElement("button");
    button.textContent = "Удалить";
    button.className = "btn-submit";
    button.addEventListener("click",() => deleteAllCars().then((response) => {
        _reactDelete(response);
    }));
    div_cars.appendChild(table);
    btnPlace.appendChild(button);
    localRoot.appendChild(div_cars);
    localRoot.appendChild(btnPlace);
    // let rows = document.getElementsByTagName("tr");
    //highlightRow(rows);
}

export default function initCar(mainRoot, componentRoot) {//переработать под принятие componentRoot и mainRoot
    localRoot = componentRoot;
    globalRoot = mainRoot;
    router = new Router();
    _getInfo();
}