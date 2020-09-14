import React from 'react';
import {
  App ,
  View
} from 'framework7-react';
import config from "../../app.config";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <App params={config} >
        <View main url="/" />
      </App>
    )
  }

  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}