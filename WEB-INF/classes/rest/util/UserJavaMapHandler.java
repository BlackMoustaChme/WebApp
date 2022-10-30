package rest.util;

import rest.model.User;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Map;

import java.util.ArrayList;

public class UserJavaMapHandler implements IRepository<User, Integer>{

    Map<Integer,User> userMap = new HashMap<Integer,User>();

//
//    User u1=new User(101,"Mica","Yolo","Visch","qwer1", "mibib");
//    User u2=new User(102,"Vica","Jolo","Tisch","qwer2", "VJT");
//    User u3=new User(103,"Tica","Volo","Zisch","qwer3", "kiwi");

//    public Map<Integer, User> getUserMap() {
//        return userMap;
//    }

    @Override
    public User get(Integer index) {
        User user = null;
//        for(Map.Entry<Integer, User> entry:userMap.entrySet()){
//            int key = entry.getKey();
//            User u = entry.getValue();
//
//        }
        if(userMap.containsKey(index)){
            user = userMap.get(index);
            return user;
        }
        return user;

//            return null;
    }

    @Override
    public ArrayList<User> getAll() {
        return null;
    }

    @Override
    public void add(User obj) {
        int id = 0;

        userMap.put(id, obj);
        id = id + 1;
    }

    @Override
    public void update(Integer index, User obj) {

    }

    @Override
    public void remove(Integer index) {

    }

    public boolean authUser(String login, String password) {
        for(int id = 0; id<= userMap.size(); id++ ){
            if(get(id).getLogin() == login && get(id).getPassword() == password) {
                return true;
            }
        }
        return false;

        //Уточнить уникальную строку, элемент
//        userMap
//        idb = idbf.createInstance("source");
//        PreparedStatement ps = null;
//        ResultSet rs = null;
//        String select = "select login, password from  where login=? and password=?;";
//        try {
//            ps = idb.getConnection().prepareStatement(select);
//            ps.setString(1, login);
//            ps.setString(2, password);
//            rs = ps.executeQuery();
//            if (rs.next()) return true;
//        } catch (Exception e) {
//            //closeConnection();
//            return false;
//        }
//        return false;
    }

    public boolean registerUser(String login, String password, String lastName, String name, String middleName){
        try{
        int id = 0;

        User usr = new User();
        usr.setLogin(login);
        usr.setPassword(password);
        usr.setLastName(lastName);
        usr.setName(name);
        usr.setMiddleName(middleName);
        UserJavaMapHandler user = new UserJavaMapHandler();
        user.add(usr);
        id = id + 1;
        } catch ( Exception e) {return false;}
        return true;
//        idb = idbf.createInstance("source");
//        PreparedStatement ps = null;
//        String insert = "insert into autoparts.user (login, password, lastName, name, middleName) values(?, ?, ?, ?, ?);";
//        try {
//            ps = idb.getConnection().prepareStatement(insert);
//            ps.setString(1, login);
//            ps.setString(2, password);
//            ps.setString(3, lastName);
//            ps.setString(4, name);
//            ps.setString(5, middleName);
//            ps.executeUpdate();
//        } catch (Exception e) {
//            //closeConnection();
//            return false;
//        }
//        //closeConnection();
//        return true;
    }
}
