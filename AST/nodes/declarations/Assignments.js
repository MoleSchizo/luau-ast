class VarAssignment {
  constructor(varList, expList) {
    this.varList = varList;
    this.expList = expList;
  }
}

class CompoundAssignment {
  constructor(variable, op, exp) {
    this.variable = variable;
    this.op = op;
    this.exp = exp;
  }
}

class LocalFunctionDeclaration {
  constructor(name, funcBody) {
    this.name = name;
    this.funcBody = funcBody;
  }
}

class LocalVarDeclaration {
  constructor(bindingList, expList) {
    this.bindingList = bindingList;
    this.expList = expList;
  }
}

class ExportTypeDeclaration {
  constructor(name, genericTypeList, type) {
    this.name = name;
    this.genericTypeList = genericTypeList;
    this.type = type;
  }
}

export {
  VarAssignment,
  CompoundAssignment,
  LocalFunctionDeclaration,
  LocalVarDeclaration,
  ExportTypeDeclaration
}