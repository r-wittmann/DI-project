import React, {Component} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Login from "./components/Authentication/Login.js";
import SignUp from "./components/Authentication/SignUp.js";
import ShoppingLists from "./components/ShoppingLists/ShoppingLists.js";
import ShoppingList from "./components/ShoppingLists/ShoppingList.js";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <h1>Awesome Shopping App</h1>
                    <div>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </div>
                    <div>
                        <Link to={"/signup"}>
                            Sign Up
                        </Link>
                    </div>
                    <div>
                        <Link to={"/lists"}>
                            My Lists
                        </Link>
                    </div>
                </>
                <Switch>
                    <Route path={"/login"} exact component={Login} />
                    <Route path={"/signup"} exact component={SignUp} />
                    <Route path={"/lists"} exact component={ShoppingLists} />
                    <Route path={"/lists/:id"} exact component={ShoppingList} />
                </Switch>
            </BrowserRouter>
        )
    }
}
