import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon, Menu } from 'semantic-ui-react';
import { ROUTE_FAVOURITES, ROUTE_MAIN } from '../../routes';

export default function Navbar() {
  const styles = {
    header: { padding: '1rem', marginBottom: '0', color: '#fff', backgroundColor: '#272727' },
    nav: { marginTop: '0' },
  };
  return (
    <Fragment>
      <Header as="h1" style={styles.header}>
        <Icon name="dollar sign" inverted />
        Currency App
      </Header>
      <Menu as="nav" attached="top" tabular style={styles.nav}>
        <Menu.Item as={Link} to={ROUTE_MAIN}>
          Main
        </Menu.Item>
        <Menu.Item as={Link} to={ROUTE_FAVOURITES}>
          Favourites
        </Menu.Item>
      </Menu>
    </Fragment>
  );
}
