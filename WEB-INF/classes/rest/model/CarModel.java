package rest.model;

import rest.util.CarDatabaseHandler;


import java.util.ArrayList;

public class CarModel implements ICar{
    @Override
    public ArrayList<Car> getAllCars() {
        return new CarDatabaseHandler().getAllCars();
    }

    @Override
    public ArrayList<Car> getUserCar(String user_name) {
        return new CarDatabaseHandler().getUserCar(user_name);
    }

    @Override
    public void addCar(Car car) {
        new CarDatabaseHandler().addCar(car);
    }

    @Override
    public void deleteCar(Integer carID) {
        new CarDatabaseHandler().deleteCar(carID);
    }
}
