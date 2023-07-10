class Block {
  constructor(stats, lastStat) {
    this.stats = stats;
    this.lastStat = lastStat;
  }

  toString() {
    const statsString = this.stats.map((stat) => stat.toString()).join(",\n    ");
    const lastStatString = this.lastStat ? this.lastStat.toString() : "undefined";
    return `Block {\n  stats: [ ${statsString} ],\n  lastStat: ${lastStatString}\n}`;
  }
}

export default Block;