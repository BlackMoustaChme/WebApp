package rest.model;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

public interface IUser {
    public boolean authUser(String login, String password);

    public boolean registerUser(String login, String password, String lastName, String name, String middleName);

//    String getUsername(Integer id);
}
