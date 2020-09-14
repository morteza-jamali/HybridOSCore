import React from 'react';
import {
    Button ,
    View
} from 'framework7-react';

const _btn_style = {
    backgroundColor : "blue" ,
    borderRadius : '50px' ,
    width : '60px' ,
    height : '60px'
};

export default class BottomApps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View init={false} id="bottomApps" className="display-flex justify-content-center justify-content-space-around">
                <Button type="button" iconMaterial="apps" iconColor="white" style={_btn_style} />
            </View>
        );
    }
}