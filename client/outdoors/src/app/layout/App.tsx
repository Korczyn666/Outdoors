import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import TrailDashboard from "../../features/trails/dashboard/TrailDashboard";
import { observer } from "mobx-react-lite";
import { Route, Switch } from "react-router-dom";
import Shop from "../../features/shop/Shop";
import TrailDetails from "../../features/trails/details/TrailDetails";
import LoginPage from "../../features/homepage/LoginPage";
import HomePage from "../../features/homepage/HomePage";
import TestErrors from "../../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";

function App() {
  return (
    <Fragment>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route exact path="/" component={LoginPage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path="/homepage" component={HomePage} />
                <Route exact path="/trails" component={TrailDashboard} />
                <Route exact path="/trails/:id" component={TrailDetails} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/errors" component={TestErrors} />
                <Route exact path="/server-error" component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

export default observer(App);
