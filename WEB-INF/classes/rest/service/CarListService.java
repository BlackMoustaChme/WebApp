package rest.service;

import jakarta.ws.rs.Path;

import java.util.ArrayList;
import java.util.List;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.core.Response;
import jakarta.inject.Inject;
import rest.model.Car;
import rest.model.ICar;
import rest.model.IUser;
import rest.model.User;
//import rest.util.CarDatabaseHandler;
//import rest.util.UserDatabaseHandler;

@Path("/cars")
public class CarListService {

    @Inject
    ICar carModel;

    @Inject
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




//    @GET
    @POST
    @Path("/car")
    public Response getUserCar(@HeaderParam(value="Authorization") String authInfo, String userJson) {
        if (!checkSession(authInfo)) {
            return Response.ok("No access").build();
        }
        User user = jsonb.fromJson(userJson, User.class);
        String ownerName = user.getLogin();
        ArrayList<Car> cars = carModel.getUserCars(ownerName);
        String resultJson = jsonb.toJson(cars);
        return Response.ok(resultJson).build();
    }

    @POST
    @Path("/")
    public Response add(@HeaderParam(value="Authorization") String authInfo, String jsonSale) {
        if (!checkSession(authInfo)) {
            return Response.ok("No access").build();
        }
        Car car = jsonb.fromJson(jsonSale, Car.class);
        carModel.addCar(car);
        return Response.ok().build();
    }

//    @POST
    @DELETE
    @Path("/")
    public Response delete(@HeaderParam(value="Authorization") String authInfo, String jsonDeleteID) {
        if (!checkSession(authInfo)) {
            return Response.ok("No access").build();
        }
        List<Car> carsID = jsonb.fromJson(jsonDeleteID, new ArrayList<Car>() {
        }.getClass().getGenericSuperclass());
        for (int i = 0; i < carsID.size(); i++) {
            carModel.deleteCar(carsID.get(i).getId());
        }
        return Response.ok().build();
    }

    private boolean checkSession(String authInfo){
        String[] user = authInfo.split(";");
        if (!userModel.authUser(user[0], user[1])) {
            return false;
        }
        return true;
    }
}
