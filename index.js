module.exports = ({variables} = {}) => {
  const styleTransformer = ({content, filename}) => {
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
