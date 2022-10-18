package rest.model;

public class Car {
    private int id;

    private String ownerName;
    private String brand;
    private String model;
    private String color;
    private String number;


    public Car(){
    }

    public Car(Integer id, String ownerName, String brand, String model, String color, String number){
        this.id = id;
        this.ownerName = ownerName;
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

    public String getOwnerName(){
        return ownerName;
    }

    public void setOwnerName(String ownerName){
        this.ownerName = ownerName;
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
