package rest.util;

import java.sql.Connection;

public class DatabaseFactory implements IDatabaseFactory{

    public IDatabase createInstance(String source){
//        IDatabase idb = null;
//        idb = new PgSQL(source);
//        return idb;
        return new PgSQL(source);
    }
}
