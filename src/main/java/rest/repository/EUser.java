package rest.repository;

import java.io.Serializable;

//JPA (Begin)
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
//JPA (End)

@Entity
@Table(name = "\"user\"")
public class EUser implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"id\"")
    private int id;

    @Column(name = "\"login\"")
    private String login;

    @Column(name = "\"password\"")
    private String password;

    @Column(name = "\"lastname\"")
    private String lastname;

    @Column(name = "\"name\"")
    private String name;

    @Column(name = "\"middlename\"")
    private String middlename;

    public int getUserId() {
        return id;
    }

    public void setUserId(int id) {
        this.id = id;
    }

    public String getUserName() {

        return name;
    }

    public void setUserName(String name) {

        this.name = name;
    }

    public String getUserLastName() {

        return lastname;
    }

    public void setUserLastName(String lastname) {

        this.lastname = lastname;
    }

    public String getUserMiddleName() {

        return middlename;
    }

    public void setUserMiddleName(String middlename) {

        this.middlename = middlename;
    }


    public String getUserPassword() {

        return password;
    }

    public void setUserPassword(String password) {

        this.password = password;
    }

    public String getUserLogin() {

        return login;
    }

    public void setUserLogin(String login) {

        this.login = login;
    }

}
