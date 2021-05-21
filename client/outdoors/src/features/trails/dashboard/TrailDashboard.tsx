import { observer } from "mobx-react-lite";
import React from "react";
import { Grid} from "semantic-ui-react";
import { Trail } from "../../../app/models/trail";
import { useStore } from "../../../app/stores/store";
import TrailDetails from "../details/TrailDetails";
import TrailList from "./TrailList";


export default observer(function TrailDashboard() {
  const {trailStore} = useStore();
  const {selectedTrail} = trailStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <TrailList trails={trailStore.trails} />
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedTrail && 
        <TrailDetails/>}
      </Grid.Column>
    </Grid>
  );
})
