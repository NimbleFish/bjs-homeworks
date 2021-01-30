function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

class ArrayBufferConverter {
  load(buffer) {
    this.buffer = new Uint16Array(buffer);
  }

  toString() {
    console.log(JSON.parse(new TextDecoder('utf-16').decode(this.buffer)));
  }
}

const buffer = new ArrayBufferConverter();
buffer.load(getBuffer());
buffer.toString();
