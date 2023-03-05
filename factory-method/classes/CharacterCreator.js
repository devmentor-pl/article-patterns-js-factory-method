import { NPC } from './NPC.js';
import { Player } from './Player.js';

export class CharacterCreator {
    create(characterType) {
        switch (characterType) {
            case 'player':
                return new Player();
            case 'npc':
                return new NPC();
            default:
                throw new Error('Unknown character type');
        }
    }
}
