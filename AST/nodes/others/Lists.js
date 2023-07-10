class ParamList {
  constructor(bindingList, hasVararg) {
    this.bindingList = bindingList;
    this.hasVararg = hasVararg;
  }
}

class ExpList {
  constructor(exps) {
    this.exps = exps;
  }
}

class NameList {
  constructor(names) {
    this.names = names;
  }
}

class VarList {
  constructor(vars) {
    this.vars = vars;
  }
}

class FieldList {
  constructor(fields) {
    this.fields = fields;
  }
}

class PropList {
  constructor(propsOrIndexers) {
    this.propsOrIndexers = propsOrIndexers;
  }
}

export { ParamList, ExpList, NameList, VarList, FieldList, PropList };