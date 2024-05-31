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