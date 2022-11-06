package rest.util;

import java.sql.Connection;

public class DatabaseFactory implements IDatabaseFactory{

//    public IDatabase createInstance(String source){
//        return new PgSQL(source);
//    }
    public IDatabase createInstance() {
        return  new PgSQL();
    }
}
