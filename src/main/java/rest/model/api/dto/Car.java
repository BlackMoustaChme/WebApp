package rest.model.api.dto;

public class Car {
    private int id;

    private String user;
    private String brand;
    private String model;
    private String color;
    private String number;


    public Car(){
    }

    public Car(Integer id, String user, String brand, String model, String color, String number){
        this.id = id;
        this.user = user;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.number = number;
    }

    public int getId() {
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getUser(){
        return user;
    }

    public void setUser(String user){
        this.user = user;
    }
    public String getBrand(){
        return brand;
    }

    public void setBrand(String brand){
        this.brand = brand;
    }

    public String getModel(){
        return model;
    }

    public void setModel(String model){
        this.model = model;
    }

    public String getColor(){
        return color;
    }

    public void setColor(String color){
        this.color = color;
    }

    public String getNumber(){
        return number;
    }

    public void setNumber(String number){
        this.number = number;
    }



}
