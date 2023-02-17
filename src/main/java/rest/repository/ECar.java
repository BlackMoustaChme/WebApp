package rest.repository;

import java.io.Serializable;

//JPA (Begin)
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
//JPA (End)

@Entity
@Table(name = "\"cars\"")
public class ECar implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"id\"")
    private int id;

    @ManyToOne
    @JoinColumn(name = "\"user_id\"")
    private EUser user;

//    @ManyToOne
//    @JoinColumn(name = "\"owner_name\"")
//    private EUser ownerName;

    @Column(name = "\"brand\"")
    private String brand;

    @Column(name = "\"model\"")
    private String model;

    @Column(name = "\"color\"")
    private String color;

    @Column(name = "\"number\"")
    private String number;

    public int getCarId() {

        return id;
    }

    public void setCarId(int id){

        this.id = id;
    }

    public EUser getCarUserId() {

        return user;
    }

    public void setCarUserId(EUser user){

        this.user = user;
    }

//    public EUser getCarOwnerName(){
//
//        return ownerName;
//    }
//
//    public void setCarOwnerName(EUser ownerName){
//
//        this.ownerName = ownerName;
//    }
    public String getCarBrand(){

        return brand;
    }

    public void setCarBrand(String brand){

        this.brand = brand;
    }

    public String getCarModel(){

        return model;
    }

    public void setCarModel(String model){

        this.model = model;
    }

    public String getCarColor(){

        return color;
    }

    public void setCarColor(String color){

        this.color = color;
    }

    public String getCarNumber(){

        return number;
    }

    public void setCarNumber(String number){

        this.number = number;
    }


}
