package rest.service;

import java.util.Objects;

public class Token {

//    private String token;

//    public Token(String token) {
//        this.token = token;
//    }

    public static boolean checkToken(String login, String token) {
        return Objects.equals(login, token);
    }

    public static String generateToken (String login) {

        String toHash = login;

//        Token hashed = new Token(toHash);
        String hashed = toHash;

        return hashed;
    }
}
