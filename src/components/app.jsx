import React from 'react';
import {
  App ,
  View
} from 'framework7-react';
import config from "../../app.config";
import BottomNavigation from "./bottomNavigation";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <App params={config} >
        <View main url="/" id="appView" />
        <BottomNavigation id="bottomNavigation" />
      </App>
    )
  }

  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}