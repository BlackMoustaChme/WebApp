import {async_registration} from "../transport/request.js";

export async function proceedRegistration(regData) {
    let jsonRegInfo = _getRegInfo(regData);
    // let response = await async_registration([RegData.getLogin(), RegData.getLastName(), RegData.getName(), RegData.getMiddleName(), RegData.getPassword()]);
    let response = await async_registration(jsonRegInfo);
    let responseData = {
        "status": response.getStatus(),
        "data": response.getBody()
    };
    return responseData;
}

function _getRegInfo(regData) {
    let jsonRegInfo = {
        "login": regData.getLogin(),
        "lastName": regData.getLastName(),
        "name": regData.getName(),
        "middleName": regData.getMiddleName(),
        "password": regData.getPassword(),
    };

    return jsonRegInfo;
}