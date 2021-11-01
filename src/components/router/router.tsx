import {BrowserRouter, Switch, Redirect} from "react-router-dom";
import {Suspense} from "react";

import DiscoverMoviesRoute from "@/routes/discover-movies";
import PageLoader from "@/components/page-loader";
import ShowMovieRoute from "@/routes/show-movie";

import {defaultRoutePath, routePaths} from "./route-path";

const Router = () => (
  <Suspense fallback={<PageLoader />}>
    <BrowserRouter>
      <Switch>
        <DiscoverMoviesRoute exact path={routePaths.discoverMovies} />
        <ShowMovieRoute exact path={routePaths.showMovie} />
        <Redirect exact from="/" to={defaultRoutePath} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Router;
