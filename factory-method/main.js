import { CharacterCreator } from './classes/CharacterCreator.js';

// inicjuję klasę-Twórcę
const creator = new CharacterCreator();

// korzystam z metody wytwórczej
const humanCharacter = creator.create('player');

// korzystam z metody wytwórczej
const shopNPC = creator.create('npc');

// używam wspólnej metody
shopNPC.renderOnMap({
    x: 10,
    y: 10
});

// używam wspólnej metody
humanCharacter.renderOnMap({
    x: 0,
    y: 0
});
