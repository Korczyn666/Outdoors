import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import '../../styles/navbar.css'



export default function Navbar() {
    return (
        <Menu inverted fixed='top' >
            <Container>
                <Menu.Item header>
                    <img src='/assets/tree.png' alt='logo' style={{marginRight: '10px'}}/>
                    Outdoors
                </Menu.Item>
                <Menu.Item name='Szlaki'/>
                <Menu.Item>
                    <Button positive content='Sklep' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}