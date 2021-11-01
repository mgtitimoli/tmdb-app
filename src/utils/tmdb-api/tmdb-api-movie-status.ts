const tmdbApiMovieStatuses = {
  canceled: "Canceled",
  inProduction: "In Production",
  planned: "Planned",
  postProduction: "Post Production",
  released: "Released",
  rumored: "Rumored"
};

type TmdbApiMovieStatus =
  typeof tmdbApiMovieStatuses[keyof typeof tmdbApiMovieStatuses];

export type {TmdbApiMovieStatus};
