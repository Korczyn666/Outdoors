import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';



export default function NotFound(){
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Nie znaleziono
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/trails' primary> Wróć do szlaków</Button>
            </Segment.Inline>
        </Segment>
    )
}