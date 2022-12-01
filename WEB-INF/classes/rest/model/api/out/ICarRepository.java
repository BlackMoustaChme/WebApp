package rest.model.api.out;

import rest.model.api.dto.Car;

import java.util.ArrayList;

public interface ICarRepository {

    public ArrayList<Car> getUserCar(String ownerName) throws Exception;

    public void addCar(Car car) throws Exception;

    public void deleteAllCars(String ownerName) throws Exception;

}
