import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useHistory
} from 'react-router-dom';
// import {Redirect } from "react-router";
import Logo from "./components/Logo/Logo";
import YellowStar from "./components/Star/YellowStar";
import BlackStar from "./components/Star/BlackStar";
import Rating from "./components/Star/Rating";
import ProfileIcon from "./components/Icons/ProfileIcon";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const authRoute = (Component) => () => {
    // const response = await adminLogin(data);

    if (localStorage.getItem('access_token')) {
        return <Component/>
    } else {
        return <Redirect to='/login'/>
    }
}

const App = props => {
    return (
        <Router {...props}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route path='/home' component={Home} />
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    );
};


export default App;
