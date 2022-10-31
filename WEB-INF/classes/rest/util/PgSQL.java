package rest.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PgSQL implements IDatabase {

    private final String source;
    private static Connection connection;

    public PgSQL(String source) {
        this.source = source;
    }

    @Override
    public Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("org.postgresql.Driver");
        connection = DriverManager.getConnection(source, "postgres", "SvolPG27");
        return connection;
    }

    @Override
    public void closeConnection() {
        try {
            connection.close();
        } catch (Exception e) {}
    }
}