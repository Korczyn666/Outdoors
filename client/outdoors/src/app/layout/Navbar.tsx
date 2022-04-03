import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Menu, Image, Dropdown } from "semantic-ui-react";
import "../../styles/navbar.css";
import { useStore } from "../stores/store";

export default observer(function Navbar() {
  const {
    userStore: { user, logout },
  } = useStore();

  const redirect = () => {
    window.location.replace("http://localhost:16592");
  }
  const homePageOld = () => {
    window.location.replace("http://127.0.0.1:8080");
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img
            src="/assets/tree.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Outdoors
        </Menu.Item>
        <Menu.Item as={NavLink} to="/trails" exact name="Szlaki" />
        <Menu.Item onClick={redirect} exact positive content="Sklep" />
        <Menu.Item onClick={homePageOld} exact positive content="Strona startowa prototyp" />
        {/* <Menu.Item as={NavLink} to="/errors" exact name="Testowanie błędów" /> */}
        <Menu.Item position="right">
          <Image
            src={user?.image || "/assets/user.png"}
            avatar
            spaced="right"
          />
          <Dropdown pointing="top left" text={user?.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`/profile/${user?.username}`}
                text="Mój profil"
                icon="user"
              />
              <Dropdown.Item onClick={logout} text="Wyloguj" icon="power" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
});
