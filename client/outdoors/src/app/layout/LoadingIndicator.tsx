import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';


interface Props {
    inverted?: boolean;
    content?: string;
}

export default function LoadingIndicator({inverted= true, content='Ładowanie'} : Props) {
    return (
        <Dimmer active={true} inverted={inverted} >
            <Loader content={content} />
        </Dimmer>
    )
}