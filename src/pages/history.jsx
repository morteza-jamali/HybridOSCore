import React from 'react';
import {Page} from 'framework7-react';
import AppRunning from "../components/history/app_running";

export default class HistoryPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Page name="history" >
                <AppRunning />
            </Page>
        );
    }
}