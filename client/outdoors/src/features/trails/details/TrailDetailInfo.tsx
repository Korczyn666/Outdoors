import { observer } from 'mobx-react-lite';
import React from 'react'
import {Segment, Grid, Icon} from 'semantic-ui-react'
import { Trail } from '../../../app/models/trail';

interface Props {
    trail: Trail
}

export default observer(function TrailDetailInfo({trail}: Props) {
    const renderStar = (item: any) => {
        const star: any[] = [];
        for (let i = 0; i < item; i++) {
          star.push(<Icon size="large" className="star outline icon" />);
        }
        return star;
    };


    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='green' name='marker'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{trail.country}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='sistrix' size='large' color='green'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
            <span>
              {renderStar(trail.diffculty)}
            </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='info' size='large' color='green'/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>Opis</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
})