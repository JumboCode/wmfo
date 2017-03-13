import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router"

import { Hello } from "./components/Hello";
import { About } from "./components/About";
import { ShowForm } from "./components/ShowForm"
import { Unknown } from "./components/Unknown";

class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
            {this.props.children}
            </div>
        )
    }
};
ReactDOM.render((

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Hello} />
            <Route path="about" component={About}/>
            <Route path="hello" component={Hello}/>
            <Route path="show_form" component={ShowForm}/>
            <Route path="*" component={Unknown}/>
        </Route>
    </Router>
), document.getElementById('wmfo-content'));
