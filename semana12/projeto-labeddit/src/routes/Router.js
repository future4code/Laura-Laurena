import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "../components/Header/Header"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

export default function Router(){
    return(
        <BrowserRouter>

            {/* <Header/> */}

            <Switch>

                <Route exact path= "/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/cadastro">
                    <SignUpPage/>
                </Route>

                <Route exact path="/">
                    <FeedPage/>
                </Route>

                <Route exact path="/post/:id">
                    <PostPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}