import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const loaderStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  minWidth: '100vw',
  minHeight: '100vh',
};
const myLoader = () => (
  <div style={loaderStyles}>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </div>
);

export default myLoader;
