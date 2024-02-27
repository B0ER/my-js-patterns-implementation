/**
 * @typedef {import('./index.js').Strategy} RoadStrategy
 */
class RoadStrategy {
  /**
   * @type {import('./index.js').Strategy['buildRoute']}
   */
  buildRoute(a, b) {
    return {
      _madeBy: RoadStrategy.name,
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
  RoadStrategy,
};
