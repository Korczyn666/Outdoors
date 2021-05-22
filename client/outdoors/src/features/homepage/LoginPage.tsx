import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function LoginPage() {
  return (
   <Segment inverted textAlign='center' vertical className="masthead">
     <Container text>
      <Header as='h1' inverted>
        <Image size='massive' src='/assets/tree.png' alt='logo' style={{marginBottom: 12}}/>
        Outdoors
      </Header>
      <Header as='h2' inverted content='Logowanie'></Header>
      <Button as={Link} to='/trails' size='huge'inverted> Zobacz szlaki</Button>
     </Container>
  </Segment> 
  );
}
