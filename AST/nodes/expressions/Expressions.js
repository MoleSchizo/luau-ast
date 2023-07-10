class PrefixExp {
  constructor(variable, functionCall) {
    this.variable = variable;
    this.functionCall = functionCall;
  }
}

class FunctionCallExp {
  constructor(prefixExp, funcName, args) {
    this.prefixExp = prefixExp;
    this.funcName = funcName;
    this.args = args;
  }
}

class BinaryOpExp {
  constructor(op, leftExp, rightExp) {
    this.op = op;
    this.leftExp = leftExp;
    this.rightExp = rightExp;
  }
}

class UnaryOpExp {
  constructor(op, exp) {
    this.op = op;
    this.exp = exp;
  }
}

class AsExp {
  constructor(simpleExp, type) {
    this.simpleExp = simpleExp;
    this.type = type;
  }
}

class StringInterpolationExp {
  constructor(parts) {
    this.parts = parts;
  }
}

class SimpleExp {
  constructor(value) {
    this.value = value;
  }
}

class TableConstructorExp {
  constructor(fields) {
    this.fields = fields;
  }
}

class Identifier {
  constructor(name) {
    this.name = name;
  }
}

export { 
  PrefixExp,
  FunctionCallExp,
  BinaryOpExp,
  UnaryOpExp,
  AsExp,
  StringInterpolationExp,
  SimpleExp,
  TableConstructorExp,
  Identifier
}