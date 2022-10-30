package rest.model;

//import rest.util.UserDatabaseHandler;

import rest.util.UserJavaMapHandler;

public class UserModel implements IUser{
    @Override
    public boolean authUser(String login, String password) {
        boolean jm = false;
        jm = new UserJavaMapHandler().authUser(login, password);
        return jm;
//        boolean db = false;
//        db = new UserDatabaseHandler().authUser(login, password);
//        return db;
//        return false;
    }

    @Override
    public boolean registerUser(String login, String password, String lastName, String name, String middleName) {
        boolean jm = false;
        jm = new UserJavaMapHandler().registerUser(login, password, lastName, name, middleName);
        return jm;
//        boolean db = false;
//        db = new UserDatabaseHandler().registerUser(login, password, lastName, name, middleName);
//        return db;
//        return true;
    }
}
