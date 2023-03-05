import { CharacterInterface } from "../interfaces/CharacterInterface.js";


export class NPC extends CharacterInterface {
    constructor() {
        super();
    }

    renderOnMap(location) {
        this.location = location;
        console.log(this);
    }

    // inne metody charakterystyczne dla NPC
    sell(item) {
        // ...
    }
}