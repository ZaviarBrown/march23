const { Food } = require("./food");

class Player {
    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {
        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        const theItem = this.currentRoom.getItemByName(itemName);

        if (theItem) {
            this.items.push(theItem);
        }
    }

    dropItem(itemName) {
        const theItem = this.getItemByName(itemName);

        if (theItem) {
            this.currentRoom.items.push(theItem);
        }
    }

    eatItem(itemName) {
        const theItem = this.getItemByName(itemName);

        if (!(theItem instanceof Food)) {
            this.items.push(theItem);
        }
    }

    getItemByName(name) {
        const theItem = this.items.find((eachItem) => eachItem.name === name);
        this.items = this.items.filter((eachItem) => eachItem !== theItem);

        return theItem;
    }
}

module.exports = {
    Player,
};
