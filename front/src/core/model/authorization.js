import {async_auth, async_sendAuthData} from "../api/request.js";

export async function proceedAuth(authInfo) {
    // console.log({"Login":authInfo.getLogin(), "Password":authInfo.getPassword()});
    let jsonAuthInfo = _getAuthInfo(authInfo);
    // let response = await async_auth({"login":authInfo.getLogin(), "password":authInfo.getPassword()});
    // let response = await async_auth(jsonAuthInfo);
    let response = await async_sendAuthData(jsonAuthInfo);
    let responseData = {
        "status": response.getStatus(),
        "data": response.getBody()
    };
    // console.log(responseData);
    return responseData;
}

function _getAuthInfo(authInfo) {
    let jsonAuthInfo = {
        "login": authInfo.getLogin(),
        "password": authInfo.getPassword()
    };

    return jsonAuthInfo;
}