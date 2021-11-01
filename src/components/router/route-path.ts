const routePaths = {
  discoverMovies: "/movies",
  showMovie: "/movies/:movieId"
} as const;

type RoutePath = typeof routePaths[keyof typeof routePaths];

const defaultRoutePath = routePaths.discoverMovies;

export {defaultRoutePath, routePaths};

export type {RoutePath};
