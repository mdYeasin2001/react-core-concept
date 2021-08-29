import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Graphics from '../Graphics/Graphics';
import Marketing from '../Marketing/Marketing';
import Web from '../Web/Web';

const Feature = () => {
    const { path, url } = useRouteMatch();
    console.log(path, url);
    return (
        <div>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link active" aria-current="page" to={`${url}/web`}>Web Development</Link>
            <Link className="nav-link" to={`${url}/marketing`}>Digital Marketing</Link>
            <Link className="nav-link" to={`${url}/graphics`}>Graphics Design</Link>

            <Switch>
                <Route exact path={path}>
                    <h3>Services</h3>
                </Route>
                <Route path={`${path}/web`}>
                    <Web/>
                </Route>
                <Route path={`${path}/marketing`}>
                    <Marketing/>
                </Route>
                <Route path={`${path}/graphics`}>
                    <Graphics/>
                </Route>
            </Switch>
        </div>
    );
};

export default Feature;