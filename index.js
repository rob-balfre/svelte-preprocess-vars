module.exports = ({variablesPath} = {}) => {
  const styleTransformer = ({content, filename}) => {
    delete require.cache[variablesPath];
    const variables = require(variablesPath);
    const regEx = /var\(([^)]+)\)/g;
    content = content.replace(regEx, (match, variable) => {
      return variables[variable.slice(2)];
    });

    return ({code: content, map: null})
  };

  return {
    style: styleTransformer,
  }
};
