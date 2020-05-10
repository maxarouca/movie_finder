import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import Movie from 'screens/Movie';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movie/:id">
                    <Movie />
                </Route>
            </Switch>
        </Router>
    );
}
