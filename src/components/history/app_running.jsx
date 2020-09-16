import React from 'react';
import {
    Card ,
    CardContent ,
    CardHeader
} from 'framework7-react';

export default class AppRunning extends React.Component {
    render() {
        return (
            <Card className="demo-facebook-card">
                <CardHeader className="no-border">
                    <div className="demo-facebook-avatar"><img src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg" width="34" height="34"/></div>
                    <div className="demo-facebook-name">John Doe</div>
                    <div className="demo-facebook-date">Monday at 3:47 PM</div>
                </CardHeader>
                <CardContent padding={false}>
                    <img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" width="100%"/>
                </CardContent>
            </Card>
        );
    }
}