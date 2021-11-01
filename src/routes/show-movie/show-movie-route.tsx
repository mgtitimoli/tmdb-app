import {lazy} from "react";
import {Route} from "react-router-dom";

import type {RouteProps} from "react-router-dom";

type Props = Omit<RouteProps, "children" | "component" | "render">;

const ShowMoviePage = lazy(() => import("./show-movie-page"));

const ShowMovieRoute = (props: Props) => (
  <Route {...props} component={ShowMoviePage} />
);

export default ShowMovieRoute;
