import React from "react";
import { Item, Segment } from "semantic-ui-react";
import { Trail } from "../../../app/models/trail";
import { useStore } from "../../../app/stores/store";
import TrailListItem from "./TrailListItem";

interface Props {
  trails: Trail[];
}

export default function TrailList(props: Props) {
  const {trailStore} = useStore();

  const {trailByName} = trailStore;

  

  return (
      <>
        {trailByName.map((trail) => (
          <TrailListItem trail={trail}/>
        ))}
      </>
  );
}
