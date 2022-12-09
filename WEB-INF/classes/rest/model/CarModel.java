package rest.model;

import rest.model.api.dto.Car;
import rest.model.api.in.ICar;
import rest.model.api.out.ICarRepository;
import rest.repository.CarsRepository;
import rest.util.CarDatabaseHandler;


import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class CarModel implements ICar {

    private ICarRepository carRepository;
    @Override
    public void injectRepository(ICarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public ArrayList<Car> getAllCars() {
//        database
        try {
            return new CarDatabaseHandler().getAllCars();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public ArrayList<Car> getUserCars(String user) {
        try {
            return carRepository.getUserCar(user);
        } catch (Exception e) {
            Logger.getLogger(CarModel.class.getName()).log(Level.INFO, null, e);
            throw new RuntimeException(e);
        }
//        return ;
//        database
//        try {
//            return new CarDatabaseHandler().getUserCar(ownerName);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
    }

    @Override
    public void addCar(Car car) {
        try {
            carRepository.addCar(car);
        } catch (Exception e)
        {
            Logger.getLogger(CarModel.class.getName()).log(Level.INFO, null, e);
        }
//        database
//        try {
//            new CarDatabaseHandler().addCar(car);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
    }

    @Override
    public void deleteCar(Integer carID) {
//        database
//        try {
//            new CarDatabaseHandler().deleteCar(carID);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
    }

    @Override
    public void deleteAll(String user) {
        try {
            carRepository.deleteAllCars(user);
        } catch (Exception e) {
            Logger.getLogger(CarModel.class.getName()).log(Level.INFO, null, e);
        }

//        database
//        try {
//            new CarDatabaseHandler().deleteAllCars(ownerName);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
    }
}
