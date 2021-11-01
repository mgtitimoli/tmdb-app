import * as z from "zod";

/* eslint-disable @typescript-eslint/naming-convention */

const environmentVariablesSchema = z.object({
  TMDB_API_KEY: z.string().min(1, {message: "Required"})
});

type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;

const environmentVariables = environmentVariablesSchema.parse({
  TMDB_API_KEY: process.env.REACT_APP_TMDB_API_KEY
});

/* eslint-enable */

export default environmentVariables;

export type {EnvironmentVariables};
