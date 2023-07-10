class FunctionCall {
  constructor(prefixExp, args) {
    this.prefixExp = prefixExp;
    this.args = args;
  }

  toString() {
    const funcName = this.prefixExp.variable.name;
    const argsString = this.args.exps.map((arg) => arg.toString()).join(", ");
    return `FunctionCall (${funcName}(${argsString}))`;
  }
}

class FunctionName {
  constructor(nameParts) {
    this.nameParts = nameParts;
  }
}

class FunctionBody {
  constructor(typeParams, params, returnType, block) {
    this.typeParams = typeParams;
    this.params = params;
    this.returnType = returnType;
    this.block = block;
  }
}

export {
  FunctionCall,
  FunctionBody,
  FunctionName
};