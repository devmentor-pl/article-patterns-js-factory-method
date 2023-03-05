// CharacterFactory to Funkcja Wytwórcza
import { characterFactory } from '../factory-function/characterFactory.js';

const humanPlayer = characterFactory({
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
const players = [humanPlayer, shopNPC];

// możemy użyć współdzielone metody
humanPlayer.renderOnMap({
    x: 0,
    y: 0
});

// możemy użyć współdzielone metody
shopNPC.renderOnMap({
    x: 10,
    y: 10
});

// możemy użyć współdzielone metody
for (const player of players) {
    player.renderOnMap({
        x: Math.random() * 10,
        y: Math.random() * 10
    });
}
