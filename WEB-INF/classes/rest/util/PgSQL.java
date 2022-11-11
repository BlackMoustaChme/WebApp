package rest.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PgSQL implements IDatabase {

//    private final String source;
    private static String source1 = "jdbc:postgresql://192.168.1.69:5432/postgres";

    private static String source2 = "jdbc:postgresql://172.20.10.3:5432/postgres";

    private static String username = "postgres";

    private static String password = "SvolPG27";
    private static Connection connection;

//    public PgSQL(String source) {
//        this.source = source;
//    }

    @Override
    public Connection getConnection() throws ClassNotFoundException, SQLException {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {return null;}
        connection = DriverManager.getConnection(source2, username, password);
        return connection;
    }

    @Override
    public void closeConnection() {
        try {
            connection.close();
        } catch (Exception e) {}
    }
}