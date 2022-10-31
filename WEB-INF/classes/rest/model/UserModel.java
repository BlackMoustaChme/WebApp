package rest.model;

import rest.util.UserDatabaseHandler;
//import rest.model.IUser;
//import rest.util.UserJavaMapHandler;
//import jakarta.inject.Inject;
//import jakarta.enterprise.context.ApplicationScoped;
//@ApplicationScoped
public class UserModel implements IUser{
//    private UserJavaMapHandler handler = new UserJavaMapHandler();
    @Override
    public boolean authUser(String login, String password) {
//        boolean jm = false;
//        jm = handler.authUser(login, password);
//        return jm;
        boolean db = false;
        try {
            db = new UserDatabaseHandler().authUser(login, password);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return db;
//        return false;
    }

    @Override
    public boolean registerUser(String login, String password, String lastName, String name, String middleName) {
//        boolean jm = false;
//        jm = handler.registerUser(login, password, lastName, name, middleName);
//        return jm;
        boolean db = false;
        try {
            db = new UserDatabaseHandler().registerUser(login, password, lastName, name, middleName);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return db;
//        return true;
    }
//    @Override
//    public String getUsername(Integer id){
//        return handler.get(id).getLogin();
//    }
}
