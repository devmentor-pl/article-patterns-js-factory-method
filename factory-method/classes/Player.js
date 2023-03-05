import { CharacterInterface } from "../interfaces/CharacterInterface.js";

export class Player extends CharacterInterface {
    constructor() {
        super();
    }

    renderOnMap(location) {
        this.location = location;
        console.log(this);
    }

    // inne metody charakterystyczne dla gracza
    move(direction) {
        // ...
    }
}
