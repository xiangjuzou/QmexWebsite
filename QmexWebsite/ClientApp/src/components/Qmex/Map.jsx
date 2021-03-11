﻿import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


export default class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 14
    };

    render() {
         return (
            // Important! Always set the container height explicitly
            <div style={{ height: '600px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyCsfFI6uxZZoZe4LR-IAEPUQbIlHTuVAIE'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                    <img lat={this.props.center.lat} lng={this.props.center.lng}  width='30px' height='30px' src='https://previews.123rf.com/images/severe06/severe061504/severe06150400001/38905904-rode-kleine-vlag.jpg' />
                </GoogleMapReact>
            </div>
        );
    }
}
