import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingIndicator from "../../../app/layout/LoadingIndicator";
import { useStore } from "../../../app/stores/store";

export default observer(function TrailDetails()  {
  const { trailStore } = useStore();
  const { selectedTrail: trail , loadTrail, loadingInitial} = trailStore;
  const {id} = useParams<{id: string}>();


  useEffect(() => {
    if(id) { loadTrail(Number(id)); }
  },[id, loadTrail]);


  const renderStar = (item: any) => {
    const star: any[] = [];
    for (let i = 0; i < item; i++) {
      star.push(<i className="star outline icon" />);
    }
    return star;
  };

if(loadingInitial || !trail) return <LoadingIndicator />

  return (
    <Card fluid>
      <Image src={`/assets/trailsImages/${trail.imageTitle}.jpg`} />
      <Card.Content>
        <Card.Header>{trail.name}</Card.Header>
        <Card.Meta>
          <span>{renderStar(trail.diffculty)}</span>
        </Card.Meta>
        <Card.Description>{trail.country}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button basic color="green" content="Zobacz więcej" />
          <Button
            basic
            color="grey"
            content="Zamknij"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
