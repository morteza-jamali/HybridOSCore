import React from 'react';
import {
    Link,
    View
} from 'framework7-react';

export default class BottomNavigation extends React.Component {
    render() {
        return(
            <View init={false} className="display-flex justify-content-center justify-content-space-around" id="bottomNavigation" >
                <Link className="bottomNavBTN" type="button" iconMaterial="arrow_back" iconColor="white"
                      href="/app/" />
                <Link className="bottomNavBTN" type="button" iconMaterial="panorama_fish_eye" iconColor="white"
                      href="/app/" />
                <Link className="bottomNavBTN" type="button" iconMaterial="filter_none" iconColor="white"
                      href="/app/" />
            </View>
        );
    }
}