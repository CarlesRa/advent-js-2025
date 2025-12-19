console.log(
  revealSantaRoute([
    ["MEX", "CAN"],
    ["UK", "GER"],
    ["CAN", "UK"],
  ]),
);
// → ['MEX', 'CAN', 'UK', 'GER']

console.log(
  revealSantaRoute([
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["UAE", "JPN"],
    ["CMX", "HKN"],
  ]),
);
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(
  revealSantaRoute([
    ["STA", "HYD"],
    ["ESP", "CHN"],
  ]),
);
// → ['STA', 'HYD']

/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  if (!routes.length) return []

  const destinations = new Set([...routes.map(route => route[1])]);
  const startIndex = routes.findIndex(route => !destinations.has(route[0]))

  if (startIndex === -1) return []

  const route = [...routes[startIndex]];

  const lookup = Object.fromEntries(routes)
  while (lookup[route[route.length - 1]]) {
    route.push(lookup[route[route.length - 1]]);
  }

  return route;
}
