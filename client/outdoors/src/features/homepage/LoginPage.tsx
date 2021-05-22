import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function LoginPage() {
  return (
    <Container style={{ marginTop: "7em" }}>
      <h1>Logowanie</h1>
      <h3>
        Idź do <Link to="/trails">Szlaki</Link>
      </h3>
    </Container>
  );
}
