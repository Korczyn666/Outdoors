import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment, Image } from "semantic-ui-react";
import { Trail } from "../../../app/models/trail";
import { useStore } from "../../../app/stores/store";

interface Props {
  trail: Trail;
}

export default function TrailListItem({ trail }: Props) {
  const { trailStore } = useStore();

  const renderStar = (item: any) => {
    const star: any[] = [];
    for (let i = 0; i < item; i++) {
      star.push(<Icon size="large" className="star outline icon" />);
    }
    return star;
  };

  return (
    <Segment.Group>
      <Segment secondary>
        <Image
          size="massive"
          src={`/assets/trailsImages/${trail.imageTitle}.jpg`}
        />
      </Segment>
      <Segment>
        <Item.Group>
          <Item>
            {/* <Item.Image  size='tiny' circular src='/assets/'/> */}
            <Item.Content>
              <Item.Header as={Link} to={`/trails/${trail.id}`}>
                {trail.name}
              </Item.Header>
              <Item.Description floated="center">{trail.country}</Item.Description>
              <span>
                <Item.Description style={{marginTop: '10px'}}>
                  {renderStar(trail.diffculty)}
                </Item.Description>
              </span>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment clearing secondary>
        <Button
          as={Link}
          to={`/trails/${trail.id}`}
          floated="right"
          content="Zobacz szlak"
          color="green"
        />
      </Segment>
    </Segment.Group>
  );
}
