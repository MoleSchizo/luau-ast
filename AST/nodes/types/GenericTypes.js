class GenericTypePackParameter {
  constructor(name) {
    this.name = name;
  }
}

class GenericTypeList {
  constructor(types) {
    this.types = types;
  }
}

class GenericTypePackParameterWithDefault {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class GenericTypeListWithDefaults {
  constructor(typeList, nameList, typeMap, genericTypePackParameter) {
    this.typeList = typeList;
    this.nameList = nameList;
    this.typeMap = typeMap;
    this.genericTypePackParameter = genericTypePackParameter;
  }
}

class GenericTypePack {
  constructor(name) {
    this.name = name;
  }
}

export default {
  GenericTypePackParameter,
  GenericTypeList,
  GenericTypePackParameterWithDefault,
  GenericTypeListWithDefaults,
  GenericTypePack
}