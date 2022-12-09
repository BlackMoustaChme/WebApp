package rest.service;

import jakarta.ws.rs.Path;

import java.util.ArrayList;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.Response;
import jakarta.inject.Inject;
import rest.builder.Built;
import rest.model.api.dto.Car;
import rest.model.api.in.ICar;
import rest.model.api.in.IUser;
//import rest.util.CarDatabaseHandler;
//import rest.util.UserDatabaseHandler;

@Path("/cars")
public class CarListService {

    @Inject
    @Built
    ICar carModel;

    @Inject
    @Built
    IUser userModel;
    private Jsonb jsonb = JsonbBuilder.create();

//    @GET
//    @Path("/")
//    public Response getCars(@HeaderParam(value="Authorization") String authInfo) {
//        if (!checkSession(authInfo)) {
//            return Response.ok("No access").build();
//        }
//        ArrayList<Car> cars = carModel.getAllCars();
//        String resultJson = jsonb.toJson(cars);
//        return Response.ok(resultJson).build();
//    }



    //    @POST
    @GET
    @Path("/")
    public Response getUserCar(@Context HttpHeaders httpHeaders) {
        String login = httpHeaders.getHeaderString("Login");
        String token = httpHeaders.getHeaderString("Authorization");
//        if (!checkSession(authInfo)``) {
//            return Response.ok("No access").build();
//        }
        if (Token.checkToken(login, token)) {
//            String ownerName = login;
            ArrayList<Car> cars = carModel.getUserCars(login);
            String resultJson = jsonb.toJson(cars);
            return Response.ok(resultJson).build();
        }
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }

    @POST
    @Path("/")
    public Response add(@Context HttpHeaders httpHeaders, String jsonSale) {
        String login = httpHeaders.getHeaderString("Login");
        String token = httpHeaders.getHeaderString("Authorization");
        if (Token.checkToken(login, token)) {
            Car car = jsonb.fromJson(jsonSale, Car.class);
            carModel.addCar(car);
            return Response.ok().build();
        }
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }

//    @POST
//    @DELETE
//    @Path("/car")
//    public Response delete(@HeaderParam(value="Authorization") String authInfo, String jsonDeleteID) {
//        if (!checkSession(authInfo)) {
//            return Response.ok("No access").build();
//        }
//        List<Car> carsID = jsonb.fromJson(jsonDeleteID, new ArrayList<Car>() {
//        }.getClass().getGenericSuperclass());
//        for (int i = 0; i < carsID.size(); i++) {
//            carModel.deleteCar(carsID.get(i).getId());
//        }
//        return Response.ok().build();
//    }
    @DELETE
    @Path("/")
    public Response deleteAll(@Context HttpHeaders httpHeaders) {
        String login = httpHeaders.getHeaderString("Login");
        String token = httpHeaders.getHeaderString("Authorization");
        if (Token.checkToken(login, token)) {
            carModel.deleteAll(login);
            return Response.ok().build();
        }
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }

    private boolean checkSession(String authInfo){
        String[] user = authInfo.split(";");
        if (!userModel.authUser(user[0], user[1])) {
            return false;
        }
        return true;
    }
}
