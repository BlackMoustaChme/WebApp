package rest.service;

public class Token {

    public static boolean checkToken(String login, String token) {
        if (login == token) {
            return true;
        }
        else {
            return false;
        }
    }

    public static String generateToken (String login) {

        String toHash = login;

        String hashed = toHash;

        return hashed;
    }
}
