/*
  Luau Language AST: Abstract Syntax Tree

  Copyright (c) 2023 Mole
  This project is licensed under the MIT License.

  DISCLAIMER: This project is not perfect, It's a work in progress and is not intended for production use.
  It is a personal project created for the purpose of learning about Abstract Syntax Trees (ASTs)
  and exploring the Luau Language. Therefore, it may contain incomplete or experimental features.

  Please use this code with caution and be aware that it may not be suitable for all use cases.
  Any reliance on this project for production purposes is at your own risk.

  This project is not affiliated with ROBLOX or any other organization.
*/

import {
  VarAssignment,
  LocalVarDeclaration,
} from "./AST/nodes/declarations/Assignments.js";
import { ExpList, VarList } from "./AST/nodes/Others/Lists.js";
import {
  SimpleExp,
  PrefixExp,
  BinaryOpExp,
  Identifier
} from "./AST/nodes/expressions/Expressions.js";
import { FunctionCall } from "./AST/nodes/expressions/Function.js";
import Chunk from "./AST/nodes/others/Chunk.js";
import Block from "./AST/nodes/others/Block.js";
import Var from "./AST/nodes/expressions/Var.js";

function traverseAST(node, indent = "") {
  const nodeName = node.constructor.name;
  const properties = Object.entries(node);

  console.log(`${indent}${nodeName} {`);

  for (const [key, value] of properties) {
    if (value === null || value === undefined) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const subNode of value) {
        traverseAST(subNode, `${indent}  `);
      }
    } else if (value && typeof value === "object") {
      traverseAST(value, `${indent}  `);
    } else {
      console.log(`${indent}  ${key}: ${value},`);
    }
  }

  console.log(`${indent}}`);
}

const ast = new Chunk(
  new Block([
    new LocalVarDeclaration(
      new VarList([new Var(new Identifier("x"), null, null)]),
      new ExpList([new SimpleExp(5)])
    ),
    new LocalVarDeclaration(
      new VarList([new Var(new Identifier("y"), null, null)]),
      new ExpList([new SimpleExp(2)])
    ),
    new FunctionCall(
      new PrefixExp(new Var(new Identifier("print"), null, null)),
      new ExpList([
        new Var(null, new PrefixExp(new Var(new Identifier("x"), null, null)), null),
        new Var(null, new PrefixExp(new Var(new Identifier("y"), null, null)), null)
      ])
    )
  ])
);

traverseAST(ast);