package rest.service;


import rest.builder.Built;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.inject.Inject;
import rest.model.api.dto.User;
import rest.model.api.in.IUser;
//import rest.util.UserDatabaseHandler;


@Path("/user")
public class UserService {

    @Inject
    @Built
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
 @Produces("application/json")
 public Response authorization(@Context HttpHeaders httpHeaders, String userJson) {
     String authToken = httpHeaders.getHeaderString("Authorization");
     if ((authToken.equals("") || authToken.equals("null")) && userJson == null) {
         return Response.status(Response.Status.UNAUTHORIZED).build();
     }
     User user;
     user = jsonb.fromJson(userJson, User.class);
     String login = user.getLogin();
     String password = user.getPassword();
//     result[0] = "Yes";
     if (login == "" || login == null) {//попався
         return Response.status(Response.Status.UNAUTHORIZED).build();
     }
//     Token token = Token.generateToken(login);
     String token = Token.generateToken(login);
     String resultJSON = jsonb.toJson(token);
     if (userModel.authUser(login, password)){
         return Response.ok(resultJSON).build();
//         return Response.ok("Yes").build();//На будущее. Лучше переработать под пользование response.status примеры код влада
     }
     return Response.status(Response.Status.BAD_REQUEST).build();
//     return Response.ok(resultJSON).build();
 }

    @POST
    @Path("/registration")
    public Response registration(@Context HttpHeaders httpHeaders, String userJson) {
        String authToken = httpHeaders.getHeaderString("Authorization");
//        Token token = Token.generateToken(authToken);
        User user = jsonb.fromJson(userJson, User.class);
        String login = user.getLogin();
        String password = user.getPassword();
        String lastName = user.getLastName();
        String name = user.getName();
        String middleName = user.getMiddleName();
        if (userModel.registerUser(login, password, lastName, name, middleName)){
            return Response.ok().build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }
 
}