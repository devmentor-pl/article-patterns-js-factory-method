export class CharacterInterface {
    constructor() {
        this.location = { x: 0, y: 0 };
    }

    renderOnMap(location) {
        throw new Error('renderOnMap Not implemented');
    }
}
