import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Login from "./modules/login"
import SignUp from "./modules/signup"
import {history} from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import Blogs from './modules/movie';

class Routes extends BaseComponent {
    componentDidMount() {
   
    }
    
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={Login}/>
                        <Route exact path={'/sign-up'} component={SignUp}/>
                        <Route exact path={'/home'} component={Blogs}/>
                        <Redirect exact from='*' to="/"/>
                    </Switch>
                </Router>
            </MuiThemeProvider>);
    }
}

export default Routes;
