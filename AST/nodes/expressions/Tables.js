class TableIndexer {
  constructor(indexType, valueType) {
    this.indexType = indexType;
    this.valueType = valueType;
  }
}

class TableProp {
  constructor(name, valueType) {
    this.name = name;
    this.valueType = valueType;
  }
}

class TablePropOrIndexer {
  constructor(propOrIndexer) {
    this.propOrIndexer = propOrIndexer;
  }
}

export default {
  TableIndexer,
  TableProp,
  TablePropOrIndexer
}