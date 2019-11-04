import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { IRoute as RouteType } from "./config";
import Loadable from "react-loadable";
import Loading from "@components/Loading";

const renderRoutes = (
  routes: any,
  authed: boolean,
  authPath = "/login",
  extraProps = {},
  switchProps = {},
): React.ReactChild | null =>
  routes ? (
    <Switch>
      {routes.map((route: RouteType, index: number) => (
        <Route
          key={route.key || index}
          path={route.path}
          exact={route.exact}
          render={(props: any) => {
            const LoadableComponent = Loadable({
              loader: () => import(`@pages/${route.component}`),
              loading: Loading,
            });
            if (!route.requireAuth) {
              return <LoadableComponent {...props} />;
            }
            return (
              <Redirect
                to={{ pathname: authPath, state: { from: props.location } }}
              />
            );
          }}
        />
      ))}
      <Route path="*" render={() => <div>123</div>} />
    </Switch>
  ) : null;

export default renderRoutes;
