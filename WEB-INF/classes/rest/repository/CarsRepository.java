package rest.repository;

import jakarta.annotation.Resource;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;
import jakarta.transaction.UserTransaction;
import rest.model.api.dto.Car;
import rest.model.api.out.ICarRepository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class CarsRepository implements ICarRepository {

    @PersistenceUnit(unitName = "local_pg_webapp_PersistenceUnit")
    private EntityManagerFactory entityManagerFactory;

    private EntityManager entityManager;

    @Resource
    private UserTransaction userTransaction;


    @Override
    public ArrayList<Car> getUserCar(String ownerName) throws Exception {
        ArrayList<Car> cars = new ArrayList<>();
        try {
            String query = "select c from ECar c where c.owner_name:=owner_name";
            entityManager = entityManagerFactory.createEntityManager();
            userTransaction.begin();
            entityManager.joinTransaction();
            List<ECar> eCars = entityManager.createQuery(query,ECar.class).setParameter("owner_name", ownerName).getResultList();
            for (ECar eCar: eCars) {
                Car car = new Car();
                car.setId(eCar.getCarId());
                car.setOwnerName(eCar.getCarOwnerName());
                car.setBrand(eCar.getCarBrand());
                car.setModel(eCar.getCarModel());
                car.setColor(eCar.getCarColor());
                car.setNumber(eCar.getCarNumber());
                cars.add(car);
            }
        } catch (Exception e) {
            Logger.getLogger(CarsRepository.class.getName()).log(Level.INFO, null, e);
            return cars;
        }
        return cars;
    }

    @Override
    public void addCar(Car car) throws Exception {
        try {
            entityManager = entityManagerFactory.createEntityManager();
            userTransaction.begin();
            entityManager.joinTransaction();
            List<EUser> eUserList = entityManager.createQuery("select u from EUser u where u.login:=login", EUser.class).setParameter("login", car.getOwnerName()).getResultList();
            ECar eCar = new ECar();
            eCar.setCarUserId(eUserList.get(0));
            eCar.setCarOwnerName(car.getOwnerName());
            eCar.setCarBrand(car.getBrand());
            eCar.setCarModel(car.getModel());
            eCar.setCarColor(car.getColor());
            eCar.setCarNumber(car.getNumber());
            entityManager.persist(eCar);
            userTransaction.commit();
            entityManager.close();
        } catch (Exception e) {
            Logger.getLogger(CarsRepository.class.getName()).log(Level.INFO, null, e);
        }
    }

    @Override
    public void deleteAllCars(String ownerName) throws Exception {
        try {
            userTransaction.begin();
            entityManager.joinTransaction();

            entityManager.createQuery("DELETE FROM ECar c WHERE c.owner_name:=owner_name")
                    .setParameter("owner_name", ownerName)
                    .executeUpdate();

            userTransaction.commit();

        } catch (Exception e) {
            Logger.getLogger(CarsRepository.class.getName()).log(Level.INFO, null, e);
        }

    }
}
