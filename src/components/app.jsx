import React from 'react';

import {
  App ,
  Button
} from 'framework7-react';

import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'HybridOSCore', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
      }
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >
        <Button fill>Button</Button>
      </App>
    )
  }

  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}