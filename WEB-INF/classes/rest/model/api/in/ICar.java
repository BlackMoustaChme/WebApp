package rest.model.api.in;

import rest.model.api.dto.Car;
import rest.model.api.out.ICarRepository;


import java.util.ArrayList;

public interface ICar {
    void injectRepository(ICarRepository carRepository);
    public ArrayList<Car> getAllCars();

    public ArrayList<Car> getUserCars(String user_name);

    public void addCar(Car car);

    public void deleteCar(Integer carID);

    public void deleteAll(String ownerName);
}
