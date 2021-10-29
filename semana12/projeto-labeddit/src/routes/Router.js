import React from "react"
import {Switch, Route} from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

export default function Router({setButton2Text}){
    return(
            <Switch>
                <Route exact path= "/login">
                    <LoginPage setButton2Text={setButton2Text}/>
                </Route>

                <Route exact path="/cadastro">
                    <SignUpPage setButton2Text={setButton2Text}/>
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
    )
}