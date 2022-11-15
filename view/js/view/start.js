// function Load() {
//     if (localStorage.getItem("login")) {
//         mainRender()
//     }
//     else {
//         pageAuth.initLogin();
//     }
// }
//
// Load();

import {async_auth} from "../transport/request";

let response = await async_auth();
let status = response.getStatus();

let root = document.body;