import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import { Trail } from '../../../app/models/trail';

const trailImageStyle = {
    filter: 'brightness(80%)'
};

const trailImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    trail: Trail;
}

export default observer (function TrailDetailHeader({trail}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/trailsImages/${trail.imageTitle}.jpg`} fluid style={trailImageStyle}/>
                <Segment style={trailImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={trail.name}
                                    style={{color: 'white'}}
                                />
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='green'>Wybierz szlak</Button>
                <Button as={Link} to='/trails' floated="right">Powrót</Button>
            </Segment>
        </Segment.Group>
    )
})