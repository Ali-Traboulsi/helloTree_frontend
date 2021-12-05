import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useHistory,
    Navigate
} from 'react-router-dom';
// import {Redirect } from "react-router";
import Logo from "./components/Logo/Logo";
import YellowStar from "./components/Star/YellowStar";
import BlackStar from "./components/Star/BlackStar";
import Rating from "./components/Star/Rating";
import ProfileIcon from "./components/Icons/ProfileIcon";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

const authRoute = (Component) => () => {
    // const response = await adminLogin(data);

    if (localStorage.getItem('access_token')) {
        return <Component/>
    } else {
        return <Route to='/login'/>
    }
}

const App = props => {
    return (
        <Router {...props}>
            <Routes>
                <Route exact path="/">
                    <Route to="/home"/>
                </Route>
                <Route path='/home' element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
};


export default App;
