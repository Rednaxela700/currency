import React, { useState, useEffect } from 'react';
import { Container, Header, Grid, Segment } from 'semantic-ui-react';
import { FETCH_RATES } from '../../api';
import useDataFetching from '../../hooks/useDataFetch';

export const mainStyles = {
  container: { padding: '5em 0em' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
};
export default function Main() {
  const [data, setData] = useState(null);

  const { loading, results } = useDataFetching(`${process.env.REACT_APP_API_KEY}${FETCH_RATES}`);
  useEffect(() => {
    setData(results);
  }),
    [];
  if (loading) return null;
  return (
    <Container as="section" style={mainStyles.container}>
      <Header as="h1">Currencies:</Header>
      <Grid.Column>
        <Segment attached>currency</Segment>
      </Grid.Column>
    </Container>
  );
}
