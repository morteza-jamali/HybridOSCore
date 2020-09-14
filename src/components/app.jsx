import React from 'react';
import {
  App ,
  View
} from 'framework7-react';
import bottomNavigation from "./home/bottomApps";

import routes from '../js/routes';
import BottomApps from "./home/bottomApps";

const f7params = {
  name: 'HybridOSCore',
  theme: 'auto',
  routes: routes,
}

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <App params={f7params} >
        <BottomApps />
      </App>
    )
  }

  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}