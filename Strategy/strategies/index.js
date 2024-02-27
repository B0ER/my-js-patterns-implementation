/**
 * @typedef Point
 * @property {Number} x
 * @property {Number} y
 */

/**
 * @typedef {Object} Route
 * @property {'shortest' | 'fastest'} type
 * @property {Point[]} geoPoints
 */

/**
 * @typedef {Object} StrategyData
 * @property {Route[]} routes
 * @property {String} _madeBy
 */

/**
 * Base Strategy interface
 * @typedef Strategy
 * @property {(a: Point, b: Point) => StrategyData} buildRoute - Indicates whether the Courage component is present.
 */

module.exports = {
  ...require("./helicopter.strategy"),
  ...require("./public-transport.strategy"),
  ...require("./road.strategy"),
};
