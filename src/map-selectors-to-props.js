import {connect} from 'react-redux';

export const createSelectorMapper = selectorMap => (...args) =>
  Object.entries(selectorMap).reduce((acc, [key, selector]) => {
    acc[key] = selector(...args);
    return acc;
  }, {});

export const mapSelectorsToProps = (selectorMap, mapDispatchToProps) =>
  connect(
    createSelectorMapper(selectorMap),
    mapDispatchToProps
  );
