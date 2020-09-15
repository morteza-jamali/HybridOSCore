import React from 'react';
import {Page} from 'framework7-react';

export default class AppPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Page name="app" >
                This is for tedst
            </Page>
        );
    }
}