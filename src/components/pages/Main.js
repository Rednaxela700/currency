import React from 'react';
import { Container, Header, Grid, Segment } from 'semantic-ui-react';

export const mainStyles = {
  container: { padding: '5em 0em' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
};
export default function Main() {
  return (
    <Container as="section" style={mainStyles.container}>
      <Header as="h1">Currencies:</Header>
      <Grid.Column>
        <Segment attached>currency</Segment>
      </Grid.Column>
    </Container>
  );
}
