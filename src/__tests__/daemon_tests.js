import Daemon from "../js/daemon";

describe('Daemon class', () => {
    it ('should create daemon correctly', () => {
        const character = new Daemon('Balthazar');
        expect(character.name).toBe('Balthazar');
        expect(character.type).toBe('Daemon');
        expect(character.attack).toBe(10);
        expect(character.defence).toBe(40);
    })
})