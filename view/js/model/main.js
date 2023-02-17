// import {async_addCar, async_deleteAllCars, async_deleteCar, async_getUserCars} from "../transport/request.js";
//
// export async function getUserCars () {
//     let response = await async_getUserCars();
//     let responseData = {
//         "status": response.getStatus(),
//         "data": response.getBody()
//     };
//     return responseData;
// }
//
// export async function addCar (carInfo) {
//     let jsonCarInfo = _getCarInfo(carInfo);
//     let response = await async_addCar(jsonCarInfo);
//     let responseData = {
//         "status": response.getStatus(),
//         "data": response.getBody()
//     };
//     return responseData;
// }
//
// export async function deleteAllCars () {
//     let response = await async_deleteAllCars();
//     let responseData = {
//         "status": response.getStatus(),
//         "data": response.getBody()
//     };
//     return responseData;
// }
//
// export async function deleteCar () {
//     let response = await async_deleteCar();
//     let responseData = {
//         "status": response.getStatus(),
//         "data": response.getBody()
//     };
//     return responseData;
// }
//
// function _getCarInfo(carInfo) {
//     // console.log(carInfo);
//     // console.log(carInfo.getOwnerName(), carInfo.getBrand())
//     let jsonCafInfo = {
//         "user": carInfo.getUser(),
//         "brand": carInfo.getBrand(),
//         "model": carInfo.getModel(),
//         "color": carInfo.getColor(),
//         "number": carInfo.getNumber()
//     };
//
//     return jsonCafInfo;
// }