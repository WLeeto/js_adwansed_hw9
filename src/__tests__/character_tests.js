import Character from "../js/character";

describe('Character class', () => {
  let character;

  beforeEach(() => {
    character = new Character('Alice', 'Bowman');
  });

  it('should create a character with valid name and type', () => {
    expect(character).toBeDefined();
  });

  it('should throw an error for an invalid name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name should be a string with length between 2 and 10 characters.');
  });

  it('should throw an error for an invalid type', () => {
    expect(() => new Character('Alice', 'InvalidType')).toThrow('Invalid character type.');
  });

  it('should set the character as stoned', () => {
    character.set_stoned();
    expect(character.get_stoned()).toBe(true);
  });

  it('should level up the character', () => {
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBeDefined();
    expect(character.defence).toBeDefined();
    expect(character.health).toBe(100);
  });

  it('should throw an error when trying to level up a dead character', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Cant raise lvl of dead character');
  });

  it('should damage the character', () => {
    character.health = 100;
    character.defence = 10;
    character.damage(10);
    expect(character.health).toBeLessThan(100);
  });

  it('should not allow damaging a dead character', () => {
    character.health = 0;
    expect(() => character.damage(10)).toThrow('Cant damage character witch is already dead');
  });

  it('should get the attack value based on distance for nerfed classes', () => {
    character.type = 'Magician';
    character.attack = 1;
    expect(character.get_attack(1)).toBeGreaterThan(0);
  });

  it('should get the attack value based on distance for non-nerfed classes', () => {
    character.type = 'Swordsman';
    character.attack = 50;
    expect(character.get_attack(1)).toBe(50);
  });

  it('should get a reduced attack value when stoned', () => {
    character.type = 'Magician';
    character.set_stoned();
    character.attack = 10;
    expect(character.get_attack(3)).toBe(3);
  });

  it('should set 0 when attack < 0', () => {
    character.attack = 10;
    character.type = 'Magician';
    character.set_stoned();
    expect(character.get_attack(8)).toBe(0);
  })
});
