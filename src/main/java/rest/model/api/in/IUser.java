package rest.model.api.in;

import rest.model.api.out.IUserRepository;

public interface IUser {
    void injectRepository(IUserRepository userRepository);
    public boolean authUser(String login, String password);

    public boolean registerUser(String login, String password, String lastName, String name, String middleName);

//    String getUsername(Integer id);
}
