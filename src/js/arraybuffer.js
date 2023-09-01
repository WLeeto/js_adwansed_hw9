
export default class ArrayBufferConverter {
    constructor() {
      this.buffer = null;
    }
  
    load(buffer) {
      this.buffer = buffer;
    }
  
    toString() {
      if (!this.buffer) {
        throw new Error('Buffer is empty. Call load() first.');
      }
  
      const bufferView = new Uint16Array(this.buffer);
      const charArray = [];
  
      for (let i = 0; i < bufferView.length; i++) {
        charArray.push(String.fromCharCode(bufferView[i]));
      }
  
      return charArray.join('');
    }
  }
