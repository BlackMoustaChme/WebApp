package rest.model;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public interface ICar {
    public ArrayList<Car> getAllCars();

    public ArrayList<Car> getUserCar(String user_name);

    public void addCar(Car car);

    public void deleteCar(Integer carID);
}
