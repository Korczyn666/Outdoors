import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { Trail } from "../../../app/models/trail";
import { useStore } from "../../../app/stores/store";

interface Props {
  trails: Trail[];
}

export default function TrailList(props: Props) {
  const {trailStore} = useStore();

  const {trailByName} = trailStore;

  const renderStar = (item: any) => {
    const star: any[] = [];
    for (let i = 0; i < item; i++) {
      star.push(<i className="star outline icon"  />);
    }
    return star;
  };

  return (
    <Segment>
      <Item.Group divided>
        {trailByName.map((trail) => (
          <Item key={trail.id}>
            <Item.Content>
              <Item.Header> </Item.Header>
              <Item.Header as="a">{trail.name}</Item.Header>
              <Item.Meta>{trail.country}</Item.Meta>
              <Item.Description>
                {renderStar(trail.diffculty)}
              </Item.Description>
              <Item.Extra>
                <Button as={Link} to ={`/trails/${trail.id}`} floated="right" content="Zobacz szlak" color="green" />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
