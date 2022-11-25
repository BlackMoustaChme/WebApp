export class Car {
    id;
    ownerName;
    brand;
    model;
    color;
    number;

    constructor(id, ownerName, brand, model, color, number) {
        this.id = id;
        this.ownerName = ownerName;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.number = number;
    }

    setId(id) {
        this.id = id;
    }

    setOwnerName(ownerName) {
        this.ownerName = ownerName;
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

    getOwnerName() {
        return this.ownerName;
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