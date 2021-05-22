import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid} from "semantic-ui-react";
import LoadingIndicator from "../../../app/layout/LoadingIndicator";
import { useStore } from "../../../app/stores/store";
import TrailFilters from "./TrailFilters";
import TrailList from "./TrailList";


export default observer(function TrailDashboard() {
  const {trailStore} = useStore();
  const {loadTrails, trailRegistry} =  trailStore;


  useEffect(() => {
   if(trailRegistry.size <= 1) loadTrails();
  }, [trailRegistry.size, loadTrails]);


  if(trailStore.loadingInitial) return <LoadingIndicator content='Ładowanie' />



  return (
    <Grid>
      <Grid.Column width="10">
        <TrailList trails={trailStore.trails} />
      </Grid.Column>
      <Grid.Column width='6'>
       <TrailFilters/>
      </Grid.Column>
    </Grid>
  );
})
