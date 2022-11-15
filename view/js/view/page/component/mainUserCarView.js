function renderUserCar() {
    var jsonLogin = {
        "login": localStorage.getItem("login")
    }
    // sendRequest("get", "api/cars/", jsonLogin, function () {
    //     if (this.readyState != 4 | this.status != 200) {
    //         return;
    //     }
    //     if (this.responseText == "No access") {
    //         authRender();
    //         return;
    //     }
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
    }//, true);
