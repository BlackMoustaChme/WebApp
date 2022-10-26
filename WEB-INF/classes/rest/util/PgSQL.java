package rest.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PgSQL implements IDatabase {

    private final String source;

    public PgSQL(String source) {
        this.source = source;
    }

    @Override
    public Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("");
        return DriverManager.getConnection(source);
    }
}
