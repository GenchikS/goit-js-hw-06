class Storage {
    #items;
    
    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        // console.log(this.#items);  // перевірка об'єкту який буде ітероуватися
        const itemsAll = [];
        for (const key of this.#items) {
            // console.log(перевірка чи вірно ітерується об'єкт);
            if (key != itemToRemove) {
                itemsAll.push(key);
            }
        }
        return this.#items = itemsAll; // присвоїти та вивести this.#items об'єкт itemsAll
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]