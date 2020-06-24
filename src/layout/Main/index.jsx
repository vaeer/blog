import React from 'react';
import routeConfig from '../../config/routeConfig';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom'

const Main = React.memo(props => {
    return (
        <Router>
            <Switch>
                {
                    routeConfig.map(item => (
                        <Route
                            path={item.path}
                            key={item.path}
                            component={item.component}
                            exact
                        />
                    ))
                }
            </Switch>
        </Router>
    );
});

export default Main;