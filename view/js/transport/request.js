function sendRequest(type, uri, data, callback_func, useToken){
    var xhr = new XMLHttpRequest();
    xhr.open(type, uri, true);//сюда пихается тип запроса, нужен if или функция для фильтрации GET, DELETE запросов
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    if (useToken == true) {
        xhr.setRequestHeader("Authorization", localStorage.getItem("login") + ";" + localStorage.getItem("password"));
    }
    if (type == "get" || type == "delete") {
        xhr.setRequestHeader("Login", localStorage.getItem("login"));
        xhr.send();
    }
    else {
        xhr.send(JSON.stringify(data));//вытекает из предыдущего комментария, GET и DELETE не имеют body
    }

    xhr.onreadystatechange = callback_func;
}

