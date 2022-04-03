import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import agent from "../../app/api/agent";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

export default observer(function LoginPage() {
  const { userStore, modalStore } = useStore();
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/tree.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Outdoors
        </Header>
        {userStore.isLoggedIn ? (
          <>
            <Header as="h2" inverted content={`Witaj ${userStore.user?.displayName} !`}></Header>
            <Button as={Link} to="/trails" size="huge" inverted>
              {" "}
              Zobacz szlaki
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => modalStore.openModal(<LoginForm />)}
              size="huge"
              inverted
            >
              {" "}
              Login!
            </Button>
            <Button
              onClick={() => modalStore.openModal(<RegisterForm />)}
              size="huge"
              inverted
            >
              {" "}
              Rejestracja!
            </Button>
          </>
        )}
      </Container>
    </Segment>
  );
});
