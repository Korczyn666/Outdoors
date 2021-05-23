import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/homepage" exact header>
          <img
            src="/assets/tree.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Outdoors
        </Menu.Item>
        <Menu.Item as={NavLink} to="/trails" exact name="Szlaki" />  
        <Menu.Item  as={NavLink} to="/shop" exact positive content="Sklep" />
        <Menu.Item as={NavLink} to="/" exact name="Logowanie" floated/>
        <Menu.Item as={NavLink} to="/errors" exact name="Testowanie błędów" />  
      </Container>
    </Menu>
  );
}
