function Load() {
    if (localStorage.getItem("login")) {
        mainRender()
    }
    else {
        pageAuth.initLogin();
    }
}

Load();