export class Car {
    id;
    user;
    brand;
    model;
    color;
    number;

    constructor(id, user, brand, model, color, number) {
        this.id = id;
        this.user = user;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.number = number;
    }

    setId(id) {
        this.id = id;
    }

    setUser(user) {
        this.user = user;
    }

    setBrand(brand) {
        this.brand = brand;
    }

    setModel(model) {
        this.model = model;
    }

    setColor(color) {
        this.color = color;
    }

    setNumber(number) {
        this.number = number;
    }

    getId() {
        return this.id;
    }

    getUser() {
        return this.user;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getColor() {
        return this.color;
    }

    getNumber() {
        return this.number;
    }

}