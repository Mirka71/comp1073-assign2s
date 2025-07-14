// making a class

class Order {
    //Added constructor to pass in parameters
    constructor(name, size, flavour) {
        this.name = name;
        this.size = size;
        this.flavour = flavour;
        
    };

    //Add method to return the sentence
        output() {
            return `${this.name} ordered a ${this.size} ${this.flavour} smoothie.`;
        } 
}

const name = document.getElementById('name');
const size = document.getElementById('size');
const flavour = 
