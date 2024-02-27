/**
 * @typedef {Object}
 * @property {(value: import('./strategies/index.js').Strategy) => void} strategy
 * @property {() => void} buildAndPrintRoute
 */
class Navigator {
  /**
   * @type {import('./strategies/index.js').Strategy}
   */
  #_strategy;

  /**
   * @param {import('./strategies/index.js').Strategy} value
   */
  set strategy(value) {
    this.#_strategy = value;
  }

  /**
   * @param {Object} points
   * @param {import('./strategies/index.js').Point} points.start
   * @param {import('./strategies/index.js').Point} points.finish
   */
  buildRoute({ start, finish }) {
    if (!this.#_strategy) {
      throw new Error("Didn't set strategy");
    }

    return this.#_strategy.buildRoute(start, finish);
  }
}

module.exports = {
  Navigator,
};
