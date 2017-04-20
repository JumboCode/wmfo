import * as React from "react";

export interface UnknownProps { compiler: string; framework: string; }

export class Unknown extends React.Component<UnknownProps, undefined> {
    render() {
        return <h1>Error 404: Page not found.</h1>;
    }
}

