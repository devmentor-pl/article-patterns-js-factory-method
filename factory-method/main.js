import { CharacterCreator } from './classes/CharacterCreator.js';

// inicjuję klasę-Twórcę
const creator = new CharacterCreator();

// korzystam z metody wytwórczej
const humanPlayer = creator.create('player');

// korzystam z metody wytwórczej
const shopNPC = creator.create('npc');

// używam wspólnych metod
shopNPC.renderOnMap({
    x: 10,
    y: 10
});

// używam wspólnych metod
humanPlayer.renderOnMap({
    x: 0,
    y: 0
});
