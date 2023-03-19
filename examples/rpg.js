// CharacterFactory to funkcja wytwórcza
import { characterFactory } from '../factory-function/characterFactory.js';

const humanCharacter = characterFactory({
    type: 'human',
    level: 0,
    money: 0,
    health: 100
});

const shopNPC = characterFactory({
    type: 'shop',
    money: 100,
    health: null
});

// dzięki wspólnym cechom obiektów możemy je grupować
const characters = [humanCharacter, shopNPC];

// możemy użyć tej samej metody
humanCharacter.renderOnMap({
    x: 0,
    y: 0
});

// możemy użyć tej samej metody
shopNPC.renderOnMap({
    x: 10,
    y: 10
});

// możemy wykorzystać fakt, że metody są współdzielone
for (const character of characters) {
    character.renderOnMap({
        x: Math.random() * 10,
        y: Math.random() * 10
    });
}
