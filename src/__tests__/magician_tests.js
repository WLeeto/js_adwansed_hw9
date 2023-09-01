import Magician from "../js/magician";

describe('Magician class', () => {
    it ('should create magician correctly', () => {
        const character = new Magician('Merlin');
        expect(character.name).toBe('Merlin');
        expect(character.type).toBe('Magician');
        expect(character.attack).toBe(10);
        expect(character.defence).toBe(40);
    })
})
