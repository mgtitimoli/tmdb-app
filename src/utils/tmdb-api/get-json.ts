import URLSearchParams from "@ungap/url-search-params";
import {requestJson as httpRequestJson} from "@mgtitimoli/utils-http/dist/httpRequest";

import environmentVariables from "@/utils/environment-variables";

const getData = (additionalData?: Record<string, unknown>) => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  api_key: environmentVariables.TMDB_API_KEY,
  ...additionalData
});

const appendSearchParams = (
  url: URL,
  additionalData?: Record<string, unknown>
) =>
  Object.assign(url, {
    search: new URLSearchParams(getData(additionalData)).toString()
  });

const createUrl = (path: string) =>
  new URL(`https://api.themoviedb.org/3${path}`);

const getEndpointUrl = (
  path: string,
  additionalData?: Record<string, unknown>
) => appendSearchParams(createUrl(path), additionalData).toString();

const getJson = <TTmdbApiResponse>(
  path: string,
  additionalData?: Record<string, unknown>
): Promise<TTmdbApiResponse> =>
  httpRequestJson(getEndpointUrl(path, additionalData));

export default getJson;
