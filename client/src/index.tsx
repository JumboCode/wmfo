import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router"

import { Home } from "./components/Home";
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
            <IndexRoute component={Home} />
            <Route path="about" component={About}/>
            <Route path="home" component={Home}/>
            <Route path="show_form" component={ShowForm}/>
            <Route path="*" component={Unknown}/>
        </Route>
    </Router>
), document.getElementById('wmfo-content'));
