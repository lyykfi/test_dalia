import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { router, IRoute } from "data/routers";

/**
 * App routers component. The component provide app routers functionals.
 * @param props - Props.
 */
const AppRouters: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        {router.map((route: IRoute) => <Route {...route} key={route.path} />)}
      </Switch>
    </Router>
  );
};

export default AppRouters;
