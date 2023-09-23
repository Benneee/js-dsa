class Shoe {
    constructor(brand, color, price, hasDiscount) {
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.hasDiscount = hasDiscount;
    }

    setDiscount(value) {
        this.hasDiscount = value;
    }

    isDiscountAvailable() {
        return this.hasDiscount;
    }
}

let airForce = new Shoe('Nike', 'red', 7000, false);
let trainers = new Shoe('Adidas', 'black', 900, true);
let supra = new Shoe('Puma', 'white', 5000, true);

console.log('does supra have discount? ', supra.isDiscountAvailable ? 'Yes, there is a discount' : 'No');