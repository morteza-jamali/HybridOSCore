import React from 'react';
import {
    Link ,
    View
} from 'framework7-react';

export default class BottomApps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View init={false} id="bottomApps" className="display-flex justify-content-center justify-content-space-around">
                <Link id="bottomAppsBTN" type="button" iconMaterial="apps" iconColor="white"
                        href="/app/" />
            </View>
        );
    }
}