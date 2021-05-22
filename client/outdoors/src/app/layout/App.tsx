import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import TrailDashboard from "../../features/trails/dashboard/TrailDashboard";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";
import Shop from "../../features/shop/Shop";
import TrailDetails from "../../features/trails/details/TrailDetails";
import LoginPage from "../../features/homepage/LoginPage";
import HomePage from "../../features/homepage/HomePage";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={LoginPage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/homepage" component={HomePage} />
              <Route exact path="/trails" component={TrailDashboard} />
              <Route exact path="/trails/:id" component={TrailDetails} />
              <Route path="/shop" component={Shop} />
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

export default observer(App);
