class Chunk {
  constructor(block) {
    this.block = block;
  }

  toString() {
    return `Chunk {\n  block: ${this.block.toString()}\n}`;
  }
}

export default Chunk;