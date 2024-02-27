/**
 * @typedef {import('./index.js').Strategy} HelicopterStrategy
 */
class HelicopterStrategy {
  /**
   * @type {import('./index.js').Strategy['buildRoute']}
   */
  buildRoute(a, b) {
    return {
      _madeBy: HelicopterStrategy.name,
      routes: [
        {
          geoPoints: [],
          type: "fastest",
        },
        {
          geoPoints: [],
          type: "shortest",
        },
      ],
    };
  }
}

module.exports = {
  HelicopterStrategy,
};
