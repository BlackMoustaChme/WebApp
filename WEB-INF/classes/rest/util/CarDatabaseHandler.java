package rest.util;

import rest.model.Car;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class CarDatabaseHandler {

//    private final IDatabase database;
//
//    public CarDatabaseHandler(IDatabase database) {
//        this.database = database;
//    }

    IDatabase idb = null;
    IDatabaseFactory idbf = new DatabaseFactory();
    public ArrayList<Car> getAllCars(){
        idb = idbf.createInstance("source");
        ArrayList<Car> cars = new ArrayList<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        String select = "select * from ;";
        try {
            ps = idb.getConnection().prepareStatement(select);
            rs = ps.executeQuery();
            while (rs.next()) {
                Integer id = rs.getInt(1);
                String ownerName = rs.getString(2);
                String brand = rs.getString(3);
                String model = rs.getString(4);
                String color = rs.getString(5);
                String number = rs.getString(6);
                Car car = new Car(id, ownerName, brand, model, color, number);
                cars.add(car);
            }
        } catch (Exception e) {
//            closeConnection();
            return cars;
        }
        return cars;
    }

    public ArrayList<Car> getUserCar(String user_name) {
        idb = idbf.createInstance("source");
        ArrayList<Car> cars = new ArrayList<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        String select = "select * from  where user_name=?;";
        try {
            ps = idb.getConnection().prepareStatement(select);
            ps.setString(1, user_name);
            rs = ps.executeQuery();
            while (rs.next()) {
                Integer id = rs.getInt(1);
                String brand = rs.getString(3);
                String model = rs.getString(4);
                String color = rs.getString(5);
                String number = rs.getString(6);
                Car car = new Car(id, user_name, brand, model, color, number);
                cars.add(car);
            }
        } catch (Exception e) {
            //closeConnection();
            return cars;
        }
        return cars;
    }

    public void addCar(Car car){
        idb = idbf.createInstance("source");
        PreparedStatement ps = null;
        String insert = "insert into  (ownerName, brand, model, color, number) values (?, ?, ?, ?, ?);";
        try {
            ps = idb.getConnection().prepareStatement(insert);
            ps.setString(1, car.getOwnerName());
            ps.setString(2, car.getBrand());
            ps.setString(3, car.getModel());
            ps.setString(4, car.getColor());
            ps.setString(5, car.getNumber());
            ps.executeUpdate();
        } catch (Exception e) {
            //closeConnection();
        }
    }

    public void deleteCar(Integer carID){
        idb = idbf.createInstance("source");
        PreparedStatement ps = null;
        String insert = "delete from  where id=?;";
        try {
            ps = idb.getConnection().prepareStatement(insert);
            ps.setInt(1, carID);
            ps.executeUpdate();
        } catch (Exception e) {
            //closeConnection();
        }
    }
}
