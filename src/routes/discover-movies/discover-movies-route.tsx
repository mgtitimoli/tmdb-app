import {lazy} from "react";
import {Route} from "react-router-dom";

import type {RouteProps} from "react-router-dom";

type Props = Omit<RouteProps, "children" | "component" | "render">;

const DiscoverMoviesPage = lazy(() => import("./discover-movies-page"));

const DiscoverMoviesRoute = (props: Props) => (
  <Route {...props} component={DiscoverMoviesPage} />
);

export default DiscoverMoviesRoute;
