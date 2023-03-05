import {Response} from "./response.js";

async function _sendRequest(type, uri, options, data) {//options для передачи header'ов
    let request;
    let headers = {
        "Content-type": "application/json; charset=utf-8",
        "Authorization": localStorage.getItem("token")
    }

    if (options != undefined || options != null) {//проверка options обращать внимание на передаваемое null или не null
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            headers[keys[i]] = options[keys[i]];
        }
    }

    if (data == null || data == undefined) {
        console.log(headers);
        request = fetch(uri, {method: type, headers: headers});
    } else if (type == "delete" || type == "get") {
        headers["Data"] = JSON.stringify(data);//для данных в header'ах
        request = fetch(uri, {method: type, headers: headers});
    } else {
        // console.log(headers);
        // console.log(data);
        // console.log(JSON.stringify(data));
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

    // console.log(response.status);
    // console.log(json);
    return new Response(response.status, json); //Response это ДТО объект

}

export async function async_getUserCars() {
    return await _sendRequest("get", "api/cars/", {"Login": localStorage.getItem("login")});
}

//надо передавать ДТО юзера
export async function async_auth(User) {
    let data;
    try {
        data = User;//ДТО Юзера .get()
        // if (data == null) {
        //     console.log("data is null")
        // }
        // else {
        //     console.log(data);
        // }
    } catch (error) {
        data = null;
    }
    // if (data == null) {
    //     console.log("data is null")
    // }
    // else {
    //     console.log(data);
    // }
    return await _sendRequest("post", "api/user/authorization", null, data);
}

//надо передавать ДТО юзера
export async function async_registration(User) {
    return await _sendRequest("post", "api/user/registration", null, User);
}

//надо передавать ДТО машины
export async function async_addCar(Car) {
    return await _sendRequest("post", "api/cars/", {"Login": localStorage.getItem("login")}, Car);
}

export async function async_deleteAllCars() {
    return await _sendRequest("delete", "api/cars/", {"Login": localStorage.getItem("login")})
}

export async function async_deleteCar(cars_id) {
    return await _sendRequest("delete", "api/cars/car/", null, cars_id)
}

export async function async_sendAuthData(loginData) {
    let protocol = "http";
    let host = "localhost";
    let port = "8080";
    let name = "wbV13653575461518671061";
    let domain = `${protocol}://${host}:${port}/${name}`;

    return await _sendRequest("post", `${domain}/api/user/authorization`, null, loginData);
}