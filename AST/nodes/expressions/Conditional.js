class IfStatement {
  constructor(clauses, elseBlock) {
    this.clauses = clauses;
    this.elseBlock = elseBlock;
  }
}

class IfElseExp {
  constructor(clauses, elseExp) {
    this.clauses = clauses;
    this.elseExp = elseExp;
  }
}

export default {
  IfStatement,
  IfElseExp
}