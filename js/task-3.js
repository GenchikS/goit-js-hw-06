class StringBuilder {
    #value;
    constructor (initialValue){
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(str){
        // console.log(str);  //  перевірка вхідного елементу
        // this.#value = str + this.#value;
        return this.#value = str + this.#value;
    }
    
    padEnd(str){
        this.#value += str;  //  додавання елементу в кінець рядку
    }

    padBoth(str){
        return this.#value = str + this.#value + str;
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="