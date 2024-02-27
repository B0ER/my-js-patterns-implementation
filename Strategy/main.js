const { Navigator } = require("./navigator");
const {
  HelicopterStrategy,
  RoadStrategy,
  PublicTransportStrategy,
} = require("./strategies");

const chosenStrategies = [
  new HelicopterStrategy(),
  new RoadStrategy(),
  new PublicTransportStrategy(),
  new HelicopterStrategy(),
];

const printRoute = (route) => {
  console.log(route._madeBy);
};

const main = () => {
  const startPoint = { x: 0, y: 0 };
  const finishPoint = { x: 10, y: 10 };

  const navigator = new Navigator();

  for (let i = 0; i < chosenStrategies.length; i++) {
    const strategy = chosenStrategies[i];
    navigator.strategy = strategy;
    const route = navigator.buildRoute({
      start: startPoint,
      finish: finishPoint,
    });
    console.log(`Route number: ${i}`);
    printRoute(route);
    console.log();
  }
};

main();
