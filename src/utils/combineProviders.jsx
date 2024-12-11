import React from "react";

/**
 * Utility function to combine multiple context providers.
 *
 * @param {Array} providers - An array of context providers.
 * @returns {React.Component} - A single combined provider.
 */
const combineProviders = (providers) => {
  return ({ children }) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
};

export default combineProviders;
