import React from 'react';
import routeConfig from '../../config/routeConfig';
import NotFound from '../../components/NotFound';
import { Route, Switch } from 'react-router-dom';

const Main = React.memo(props => {
    return (
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
            <Route component={NotFound} />
        </Switch>
    );
});

export default Main;