class DoStatement {
  constructor(block) {
    this.block = block;
  }
}

class WhileStatement {
  constructor(exp, block) {
    this.exp = exp;
    this.block = block;
  }
}

class RepeatStatement {
  constructor(block, exp) {
    this.block = block;
    this.exp = exp;
  }
}

class ForNumericStatement {
  constructor(binding, startExp, endExp, stepExp, block) {
    this.binding = binding;
    this.startExp = startExp;
    this.endExp = endExp;
    this.stepExp = stepExp;
    this.block = block;
  }
}

class ForGenericStatement {
  constructor(bindingList, expList, block) {
    this.bindingList = bindingList;
    this.expList = expList;
    this.block = block;
  }
}

export default {
  DoStatement,
  WhileStatement,
  RepeatStatement,
  ForNumericStatement,
  ForGenericStatement
}