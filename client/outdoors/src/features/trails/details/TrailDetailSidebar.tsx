import React from 'react'
import { Segment, List, Label, Item, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

export default observer(function TrailDetailSidebar () {
    return (
        <>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='green'
            >
                Polecane na tą trasę
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    <Item style={{ position: 'relative' }}>
                        <Label
                            style={{ position: 'absolute' }}
                            color='green'
                            ribbon='right'
                        >
                            Nowość
                        </Label>
                        <Image size='tiny' src={'/assets/buty.png'} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                                <Item style={{ color: 'grey' }}>Buty</Item>
                            </Item.Header>
                            <Item.Extra as={Link} to={`#`} style={{ color: 'green' }}>Ms Wildfire Edge Gtx GORE-TEX</Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item style={{ position: 'relative' }}>
                        <Image size='tiny' src={'/assets/kurtka.jpg'} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                            <Item style={{ color: 'grey' }}>Kurtka</Item>
                            </Item.Header>
                            <Item.Extra as={Link} to={`#`} style={{ color: 'green' }}>Regatta Oklahoma Isotex 15000</Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item style={{ position: 'relative' }}>
                        <Image size='tiny' src={'/assets/plecak.jpg'} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                            <Item style={{ color: 'grey' }}>Plecak</Item>
                            </Item.Header>
                            <Item.Extra as={Link} to={`#`} style={{ color: 'green' }}>HI-TEC Abura 35L</Item.Extra>
                        </Item.Content>
                    </Item>
                </List>
            </Segment>
        </>

    )
})