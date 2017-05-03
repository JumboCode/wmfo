import * as React from 'react';
import { Component } from './Component';

export class FormContainer extends Component<{header: string, width: string}, {}> {
    render() {
        const style = {
            marginTop: 'auto',
            marginLeft: this.props.width,
            marginRight: this.props.width,
            padding: '0%',
            textAlign: 'center',
            borderRadius: '2em',
        };
        const headerStyle = {
            fontSize: '2em',
            marginBottom: '5%'
        };
        return (
            <div style={{width: '100%', height: '100%'}}>
                <div style={style}>
                    <div style={headerStyle}>{this.props.header}</div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}