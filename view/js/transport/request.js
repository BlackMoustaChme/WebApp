// function sendRequest(type, uri, data, callback_func, useToken){
//     var xhr = new XMLHttpRequest();
//     xhr.open(type, uri, true);//сюда пихается тип запроса, нужен if или функция для фильтрации GET, DELETE запросов
//     xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
//     if (useToken == true) {
//         xhr.setRequestHeader("Authorization", localStorage.getItem("login") + ";" + localStorage.getItem("password"));
//     }
//     if (type == "get" || type == "delete") {
//         xhr.setRequestHeader("Login", localStorage.getItem("login"));
//         xhr.send();
//     }
//     else {
//         xhr.send(JSON.stringify(data));//вытекает из предыдущего комментария, GET и DELETE не имеют body
//     }
//
//     xhr.onreadystatechange = callback_func;
// }
import {Response} from "./response";
async function _sendRequest(type, uri, options, data) {//options для передачи header'ов
    let request;
    let headers = {
        "Content-type": "application/json; charset=utf-8",
        "Authorization": localStorage.getItem("token")
    }

    if (options != undefined || options != null) {
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            headers[keys[i]] = options[keys[i]];
        }
    }

    if (data == null || data == undefined) {
        request = fetch(uri, {method: type, headers: headers});
    } else if (type == "delete" || type == "get") {
        headers["Data"] = JSON.stringify(data);//для данных в header'ах
        request = fetch(uri, {method: type, headers: headers});
    } else {
        request = fetch(uri, {method: type, headers: headers, body: JSON.stringify(data)});
    }

    //прокидка реквеста и вытаскивание данных
    let response = await request;
    let json;
    try {
        json = await response.json();
    } catch (error) {
        json = null;
    }


    return new Response(response.status, json); //Response это ДТО объект

}

export async function async_getUserCars() {
    return await _sendRequest("GET", "api/cars/", {"Login": localStorage.getItem("login")});
}

//надо передавать ДТО юзера
export async function async_auth() {
    let data;
    try {
        data = //ДТО Юзера .get()
    } catch (error) {
        data = null;
    }
    return await _sendRequest("post", "api/user/authorization", null, data);
}

//надо передавать ДТО юзера
export async function async_registration() {
    return await _sendRequest("post", "api/user/authorization", null, .get());
}

//надо передавать ДТО машины
export async function async_addCar() {
    return await _sendRequest("post", "api/cars/", {"Login": localStorage.getItem("login")}, .get());
}

export async function async_deleteAllCars() {
    return await _sendRequest("delete", "api/cars/", {"Login": localStorage.getItem("login")})
}

export async function async_deleteCar(cars_id) {
    return await _sendRequest("delete", "api/cars/car/", null, cars_id)
}