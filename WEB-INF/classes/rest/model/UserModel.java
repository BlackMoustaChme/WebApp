package rest.model;

import rest.util.UserDatabaseHandler;

public class UserModel implements IUser{
    @Override
    public boolean authUser(String login, String password) {
        boolean db = false;
        db = new UserDatabaseHandler().authUser(login, password);
        return db;
    }

    @Override
    public boolean registerUser(String login, String password, String lastName, String name, String middleName) {
        boolean db = false;
        db = new UserDatabaseHandler().registerUser(login, password, lastName, name, middleName);
        return db;
    }
}
