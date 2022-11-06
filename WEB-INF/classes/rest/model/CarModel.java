package rest.model;

import rest.util.CarDatabaseHandler;


import java.util.ArrayList;

public class CarModel implements ICar{
    @Override
    public ArrayList<Car> getAllCars() {
        try {
            return new CarDatabaseHandler().getAllCars();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public ArrayList<Car> getUserCars(String ownerName) {
        try {
            return new CarDatabaseHandler().getUserCar(ownerName);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void addCar(Car car) {
        try {
            new CarDatabaseHandler().addCar(car);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteCar(Integer carID) {
        try {
            new CarDatabaseHandler().deleteCar(carID);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteAll(String ownerName) {
        try {
            new CarDatabaseHandler().deleteAllCars(ownerName);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
