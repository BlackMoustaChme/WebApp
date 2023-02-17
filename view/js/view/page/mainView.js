// import {Router} from "../router.js";
// import initCar from "./component/mainUserCarView.js";
// import initAddCar from "./component/mainAddCarView.js";
// // import {renderAddCar} from "./component/mainAddCarView.js";
// // сделать полное разделение вью и модели
// // Убрать реакцию в модель и оставить рендер, сбор и передачу данных
// // Можно сделать классы для вьюшек с методом render
// // в main всё тоже самое и сделать его компоненты простыми рендерами
// // Можно попробовать их реализовать просто через экспортные рендеры
// let root = undefined;
// let componentRoot = undefined;
// let router = undefined;
//
// function _renderMain() {
//     root.innerHTML = "<span class='overPage'></span> " +
//         "<div class='main-page'>" +
//         "<header>" +
//         "<div class='start'>" +
//         "<span>CarService</span>" +
//         "</div>" +
//         "<div class='end'>" +
//         "<span class='user-login'>Chrnsv</span>" +
//         "<button id='btn-logout' class='btn-logout'></button>" +
//         "</div>" +
//         "</header>" +
//         "<div id='wrap-content'></div>" +
//         "</div>";//"<span class='overPage'></span>" +
//     // "<div class='main-page'>" +
//     // "<header>" +
//     // "<div class='start'>" +
//     // "<span>CarService</span>" +
//     // "</div>" +
//     // "<div class='end'>" +
//     // "<span class='user-login'>Chrnsv</span>" +
//     // "<button id='btn-logout' class='btn-logout'></button>" +
//     // "</div>" +
//     // "</header>" +
//     // "<div class='wrap-content'>" +
//     // "<div id='menu'></div>" +
//     // "<div class='content'>" +
//     // "<div id='main-content'></div>" +
//     // "<div id='btn-place'></div>" +
//     // "</div>" +
//     // "</div>" +
//     // "</div>"
//     _renderMenu();
//     _renderContent();
//     // renderAllCars();
//     componentRoot = document.getElementById("content");
//     let userLogin = document.getElementsByClassName("user-login")[0];
//     let btnLogout = document.getElementById("btn-logout");
//     userLogin.textContent = localStorage.getItem("login");
//     btnLogout.addEventListener("click", _logout);
// }
//
// function _logout() {
//     let animationBlock = document.getElementsByClassName("overPage")[0];
//     localStorage.removeItem("login");
//     localStorage.removeItem("token");
//     // animationCover(animationBlock, 0.5, 0);
//     router.pageAuth(root);
// }
//
// /* RENDER MENU */
//
// function _renderMenu() {
//     let menu_root = document.getElementById("wrap-content");
//     let menu = document.createElement("div");
//     menu.className = "menu";
//     // let menu_items = ["Мои машины", "Добавить", "Удалить"];
//     let menu_items = ["Мои машины", "Добавить"]
//     let list = document.createElement("ul");
//     for (let i = 0; i < menu_items.length; i++) {
//         let row = document.createElement("li");
//         let btn = document.createElement("button");
//         // let buttons = list.getElementsByTagName("button");
//         btn.textContent = menu_items[i];
//         row.appendChild(btn);
//         // buttons.push(btn);
//         list.appendChild(row);
//     }
//     menu.appendChild(list);
//     menu_root.appendChild(menu);
//
//     let buttons = list.getElementsByTagName("button");
//     let menu_funcs = [
//         () => initCar(root, componentRoot),
//         () => initAddCar(root, componentRoot),
//         // () => renderAddCar(componentRoot)
//     ];
//     for (let i = 0; i < menu_funcs.length; i++) {
//         buttons[i].addEventListener("click", menu_funcs[i]);
//     }
//     // buttons[0].addEventListener("click", renderAllCars);
//     // buttons[0].addEventListener("click", renderUserCar)
//     // buttons[1].addEventListener("click", renderAddCar);
//     // buttons[2].addEventListener("click", renderUserCar);
//     // highlightMenu(buttons);
// }
//
// function _renderContent() {
//     let content_root = document.getElementById("wrap-content");
//     let content = document.createElement("div");
//     content.id = "content";
//     content_root.appendChild(content);
//     // initCar(content);
// }
//
// export default function init(_root) {
//     root = _root;
//     router = new Router();
//     _renderMain();
// }