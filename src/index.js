var render = require("pug").render;
var transform = require("babel-core").transform;

module.exports = function({ types: t }) {
  return {
    visitor: {
      TaggedTemplateExpression(path, state) {
        if (path.node.tag.name === "pug") {
          path.replaceWith(
            t.expressionStatement(
              t.stringLiteral(
                render(
                  "<!>\n" +
                    path.node.quasi.quasis[0].value.raw.replace(/\s+$/, "")
                ).replace("<!>", "")
              )
            )
          );
        }
      }
    }
  };
};
