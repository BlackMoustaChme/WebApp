package rest.repository;

import jakarta.annotation.Resource;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;
import jakarta.transaction.UserTransaction;
import rest.model.api.out.IUserRepository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;


public class UserRepository implements IUserRepository {

    @PersistenceUnit(unitName = "local_pg_webapp_PersistenceUnit")
    private EntityManagerFactory entityManagerFactory;

    private EntityManager entityManager;

    @Resource
    private UserTransaction userTransaction;


    @Override
    public boolean registerUser(String login, String password, String lastName, String name, String middleName) throws Exception {
        try {
            entityManager = entityManagerFactory.createEntityManager();
            userTransaction.begin();
            entityManager.joinTransaction();
            EUser eUser = new EUser();
            eUser.setUserLogin(login);
            eUser.setUserPassword(password);
            eUser.setUserLastName(lastName);
            eUser.setUserName(name);
            eUser.setUserMiddleName(middleName);
            entityManager.persist(eUser);
            userTransaction.commit();
            entityManager.close();
        } catch (Exception e) {
            Logger.getLogger(UserRepository.class.getName()).log(Level.INFO, null, e);
            return false;
        }
        return true;
    }

    @Override
    public boolean authUser(String login, String password) throws Exception {
        String query = "select u from EUser u where u.login:=login and u.password:=password";
        Integer size = 0;
        try {
            entityManager = entityManagerFactory.createEntityManager();
            userTransaction.begin();
            entityManager.joinTransaction();
            List<EUser> userList = entityManager.createQuery(query, EUser.class).setParameter("login", login).setParameter("password", password).getResultList();
            size = userList.size();
            userTransaction.commit();
            entityManager.close();
        } catch (Exception e) {
            Logger.getLogger(UserRepository.class.getName()).log(Level.INFO, null, e);
        }
        return (size == 1);

//        return false;
    }
}
