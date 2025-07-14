// making a class

class Order {
    //Added constructor to pass in parameters
    constructor(name, size, flavour) {
        this.name = name;
        this.size = size;
        this.flavour = flavour;
        
    }

    //Add method to return the sentence
        output() {
            return `${this.name} ordered a ${this.size} ${this.flavour} smoothie.`;
        } 
}

// create variables to grab form input values
const name = document.getElementById('name');
const size = document.getElementById('size');
const flavour = document.querySelector('input[name="flavour"]:checked');

// Making an object with new variables
const smoothie = new Order(name, size, flavour);

// Output values to empty <p>
document.getElementById('output').innerHTML = `${smoothie.output}`;

