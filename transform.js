const exprWithProperty = (j, name) => [
  j.CallExpression,
  {
    callee: {
      type: 'MemberExpression',
      property: {
        type: 'Identifier',
        name,
      },
    },
  },
];

const isThen = j => exprWithProperty(j, 'then');
const isCatch = j => exprWithProperty(j, 'catch');

const isAnonymous = (node) => {
  const [thenCallExpression] = node.value.arguments;
  return thenCallExpression.type !== 'CallExpression'
    && thenCallExpression.type !== 'Identifier'
    && thenCallExpression.type !== 'MemberExpression';
};

const findAttachableParent = (j, path) => {
  if (!path) {
    // no attachable parent
    return null;
  }

  const isAttachable =
    path.node.type === 'ObjectExpression' && path.parent.value.type !== 'Property';

  if (isAttachable) {
    return path.value.properties;
  }

  return findAttachableParent(j, path.parent);
};

const makeMethod = (j, func, i) => {
  let funcBody;

  if (func.body && func.body.type !== 'BlockStatement') {
    // if arrow function, convert return value to block statement
    funcBody = j.blockStatement([j.returnStatement(func.body)]);
  } else {
    funcBody = func.body;
  }

  const newFunc = j.functionExpression(null, func.params, funcBody);
  const newMethod =
    j.property('init', j.identifier(`_p${i}`), newFunc);
  newMethod.method = true;

  return newMethod;
};

const makeBoundCall = (j, i) => {
  // invoke this computed method
  const obj = j.memberExpression(j.thisExpression(), j.identifier(`_p${i}`));
  // add bind
  const callee = j.memberExpression(obj, j.identifier('bind'));
  // call bind with this
  return j.callExpression(callee, [j.thisExpression()]);
};

const replaceAnonymousFuncsWithBoundMethods = (j, expressions, startIndx = 0) => {
  let exprCount = startIndx;
  expressions.replaceWith((path) => {
    exprCount += 1;

    const [callExpression] = path.node.arguments;
    const parentObject = findAttachableParent(j, path);

    if (!parentObject) {
      return path.node;
    }

    parentObject.unshift(makeMethod(j, callExpression, exprCount));

    /* eslint-disable no-param-reassign */
    path.node.arguments = [makeBoundCall(j, exprCount)];
    /* eslint-disable no-param-reassign */

    return path.node;
  });
  return exprCount;
};

const transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const thens = root.find(...isThen(j)).filter(isAnonymous);
  const catches = root.find(...isCatch(j)).filter(isAnonymous);

  const count = replaceAnonymousFuncsWithBoundMethods(j, thens);
  replaceAnonymousFuncsWithBoundMethods(j, catches, count);

  return root.toSource();
};

module.exports = transform;
