package rest.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public class UserDatabaseHandler {
//    private  final IDatabase database;
//
//    public UserDatabaseHandler(IDatabase database) {
//        this.database = database;
//    }
//    private  final IDatabase idb;
//
//    private  final IDatabaseFactory idbf;
//
//    public UserDatabaseHandler(IDatabase idb, IDatabaseFactory idbf) {
//        this.idb = idb;
//        this.idbf = idbf;
//    }
    IDatabase idb = null;
    IDatabaseFactory idbf = new DatabaseFactory();


    public boolean authUser(String login, String password) {
        //Уточнить уникальную строку, элемент
        idb = idbf.createInstance("source");
        PreparedStatement ps = null;
        ResultSet rs = null;
        String select = "select login, password from  where login=? and password=?;";
        try {
            ps = idb.getConnection().prepareStatement(select);
            ps.setString(1, login);
            ps.setString(2, password);
            rs = ps.executeQuery();
            if (rs.next()) return true;
        } catch (Exception e) {
            //closeConnection();
            return false;
        }
        return false;
    }

    public boolean registerUser(String login, String password, String lastName, String name, String middleName){
        idb = idbf.createInstance("source");
        PreparedStatement ps = null;
        String insert = "insert into autoparts.user (login, password, lastName, name, middleName) values(?, ?, ?, ?, ?);";
        try {
            ps = idb.getConnection().prepareStatement(insert);
            ps.setString(1, login);
            ps.setString(2, password);
            ps.setString(3, lastName);
            ps.setString(4, name);
            ps.setString(5, middleName);
            ps.executeUpdate();
        } catch (Exception e) {
            //closeConnection();
            return false;
        }
        //closeConnection();
        return true;
    }

}
