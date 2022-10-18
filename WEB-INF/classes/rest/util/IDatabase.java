package rest.util;

import java.sql.Connection;

public interface IDatabase {

    Connection getConnection() throws Exception;

}
