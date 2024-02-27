/**
 * @typedef {import('./index.js').Strategy} PublicTransportStrategy
 */
class PublicTransportStrategy {
  /**
   * @type {import('./index.js').Strategy['buildRoute']}
   */
  buildRoute(a, b) {
    return {
      _madeBy: PublicTransportStrategy.name,
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
  PublicTransportStrategy,
};
