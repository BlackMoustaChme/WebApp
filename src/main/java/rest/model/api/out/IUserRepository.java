package rest.model.api.out;

public interface IUserRepository {

    public boolean registerUser(String login, String password, String lastName, String name, String middleName) throws Exception;

    public boolean authUser(String login, String password) throws Exception;
}
