import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingIndicator from "../../../app/layout/LoadingIndicator";
import { useStore } from "../../../app/stores/store";
import TrailDetailInfo from "./TrailDetailInfo";
import TrailDetailsHeader from "./TrailDetailsHeader";
import TrailDetailSidebar from "./TrailDetailSidebar";

export default observer(function TrailDetails() {
  const { trailStore } = useStore();
  const { selectedTrail: trail, loadTrail, loadingInitial } = trailStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      loadTrail(Number(id));
    }
  }, [id, loadTrail]);

  if (loadingInitial || !trail) return <LoadingIndicator />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <TrailDetailsHeader trail={trail} />
        <TrailDetailInfo trail={trail} />
      </Grid.Column>
      <Grid.Column width={6}>
        <TrailDetailSidebar trail={trail} />
      </Grid.Column>
    </Grid>
  );
});
