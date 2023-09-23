class Cookie {
    constructor(color) {
        this.color = color
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color
    }
}

let cookieOne = new Cookie('pink');
console.log('1: ', cookieOne);

cookieOne.setColor('green');

console.log(cookieOne.getColor());