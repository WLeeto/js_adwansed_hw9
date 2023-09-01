import ArrayBufferConverter from "../js/arraybuffer";

describe('ArrayBufferConverter', () => {
  let bufferConverter;

  beforeEach(() => {
    bufferConverter = new ArrayBufferConverter();
  });

  test('load should set the buffer', () => {
    const buffer = new ArrayBuffer(16);
    bufferConverter.load(buffer);
    expect(bufferConverter.buffer).toBe(buffer);
  });

  test('toString should return the string representation of the buffer', () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    
    for (let i = 0; i < data.length; i++) {
      bufferView[i] = data.charCodeAt(i);
    }

    bufferConverter.load(buffer);
    const jsonString = bufferConverter.toString();
    expect(jsonString).toBe(data);
  });

  test('toString should throw an error if buffer is not loaded', () => {
    expect(() => {
      bufferConverter.toString();
    }).toThrow('Buffer is empty. Call load() first.');
  });
});
