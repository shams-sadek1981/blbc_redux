import React, { Component, Fragment } from 'react';
import { Route, Link } from "react-router-dom";

import User from '../User/'
import Home from '../Home/'
import Topics from '../Topics/'
import About from '../About/'

import { ledgerRoutes } from './ledgerRoutes'

class ProjectRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={User} />
                <Route path="/topics" component={Topics} />
                
                <Route path="/ledger" component={ledgerRoutes} />

                <Route path="/about" component={About} />
            </Fragment>
        );
    }
}

export default ProjectRoutes;