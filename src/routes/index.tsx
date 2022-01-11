import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Dashboard } from "../pages/Dashboard";
// import { Repo } from "../pages/Repo";

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "dashboard" */ "../pages/Dashboard"
    )
);
const Repo = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "repo" */ "../pages/Repo"
    )
);

export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repositories/:repository+" component={Repo} />
      </Switch>
    </React.Suspense>
  );
};
