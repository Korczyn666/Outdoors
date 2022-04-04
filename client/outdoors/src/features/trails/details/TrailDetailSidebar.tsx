import React from "react";
import { Segment, List, Label, Item, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Trail } from "../../../app/models/trail";

interface Props {
  trail: Trail;
}

export default observer(function TrailDetailSidebar({ trail }: Props) {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="green"
      >
        Polecane na tą trasę
      </Segment>
      <Segment attached>
        <List relaxed divided>
          <Item style={{ position: "relative" }}>
            {/* <Label
                            style={{ position: 'absolute' }}
                            color='green'
                            ribbon='right'
                        >
                            Nowość
                        </Label> */}
            <Image
              size="tiny"
              src={`/assets/${trail.recomendedProducts[0].productNameCut.replace(
                /\s/g,
                ""
              )}.png`}
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Item style={{ color: "grey" }}>Produkt</Item>
              </Item.Header>
              <Item.Extra
                as={Link}
                onClick={() => {
                  window.location.replace(
                    `${trail.recomendedProducts[0].redirect}`
                  );
                }}
                style={{ color: "green" }}
              >
                {trail.recomendedProducts[0].productName}
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item style={{ position: "relative" }}>
            <Image
              size="tiny"
              src={`/assets/${trail.recomendedProducts[1].productNameCut.replace(
                /\s/g,
                ""
              )}.png`}
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Item style={{ color: "grey" }}>Produkt</Item>
              </Item.Header>
              <Item.Extra
                as={Link}
                onClick={() => {
                  window.location.replace(
                    `${trail.recomendedProducts[1].redirect}`
                  );
                }}
                style={{ color: "green" }}
              >
                {trail.recomendedProducts[1].productName}
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item style={{ position: "relative" }}>
            <Image
              size="tiny"
              src={`/assets/${trail.recomendedProducts[2].productNameCut.replace(
                /\s/g,
                ""
              )}.png`}
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Item style={{ color: "grey" }}>Produkt</Item>
              </Item.Header>
              <Item.Extra
                as={Link}
                onClick={() => {
                  window.location.replace(
                    `${trail.recomendedProducts[2].redirect}`
                  );
                }}
                style={{ color: "green" }}
              >
                {trail.recomendedProducts[2].productName}
              </Item.Extra>
            </Item.Content>
          </Item>
        </List>
      </Segment>
    </>
  );
});
