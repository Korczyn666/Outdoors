import React, { Fragment, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Trail } from "../models/trail";
import Navbar from "./Navbar";
import TrailDashboard from "../../features/trails/dashboard/TrailDashboard";
import LoadingIndicator from "./LoadingIndicator";
import { store, useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const {trailStore} = useStore();


  useEffect(() => {
    trailStore.loadTrails();
  }, [trailStore]);


  if(trailStore.loadingInitial) return <LoadingIndicator content='Ładowanie' />


  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <TrailDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
