import React from 'react';
import {Page} from 'framework7-react';
import BottomApps from "../components/home/bottomApps";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Page name="home" id="home-page">
                <BottomApps/>
            </Page>
        );
    }
}