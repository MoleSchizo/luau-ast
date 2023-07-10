class Type {
  constructor(value) {
    this.value = value;
  }
}

class TypeList {
  constructor(types, hasVararg) {
    this.types = types;
    this.hasVararg = hasVararg;
  }
}

class TypeParams {
  constructor(params) {
    this.params = params;
  }
}

class TypePack {
  constructor(types) {
    this.types = types;
  }
}

class ReturnType {
  constructor(type) {
    this.type = type;
  }
}

export default {
  Type,
  TypeList,
  TypeParams,
  TypePack,

  ReturnType
}