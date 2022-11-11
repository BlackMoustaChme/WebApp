package rest.service;


import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.core.Response;
import jakarta.inject.Inject;
import rest.model.IUser;
import rest.model.User;
import rest.model.UserModel;
//import rest.util.UserDatabaseHandler;

import java.util.ArrayList;
import java.util.List;



@Path("/user")
public class UserService {

    @Inject
    IUser userModel;
    private Jsonb jsonb = JsonbBuilder.create();

 @GET
 @Path("/")
 @Produces("text/plain")
 public String ping() {   
  return "OK";
 } 
 
 
 @POST
 @Path("/authorization")
 public Response authorization(String userJson) {
     User user;
     user = jsonb.fromJson(userJson, User.class);
     String login = user.getLogin();
     String password = user.getPassword();
//     String[] result = new String[2];
//     result[0] = "Yes";
//     result[1] = Token.generateToken(login);
//     String resultJSON = jsonb.toJson(result);
     if (userModel.authUser(login, password)){
//         return Response.ok(resultJSON).build();
         return Response.ok("Yes").build();//На будущее. Лучше переработать под пользование response.status примеры код влада
     }
     return Response.ok("No").build();
 }

    @POST
    @Path("/registration")
    public Response registration(String userJson) {
        User user = jsonb.fromJson(userJson, User.class);
        String login = user.getLogin();
        String password = user.getPassword();
        String lastName = user.getLastName();
        String name = user.getName();
        String middleName = user.getMiddleName();
        if (userModel.registerUser(login, password, lastName, name, middleName)){
            return Response.ok("Yes").build();
        }
        return Response.ok("No").build();
    }
 
}