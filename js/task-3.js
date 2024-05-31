class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    showName() {
        console.log(`Hello ${this.name}. Me ${this.age} age`);
    }
}

const allName = new User(`Alice`, 30);
console.log(allName);
console.log(allName.showName());



class StringBuilder {
    #value;
    constructor (initialValue){
        this.value = initialValue;
    }

    getValue() {
        return this.value;
    }

    
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="