import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import HomePage from'./components/HomePage/HomePage';
import ListTripsPage from './components/ListTripsPage/ListTripsPage';
import ApplicationFormPage from './components/ApplicationFormPage/ApplicationFormPage';
import LoginPage from './components/LoginPage/LoginPage';
import AdminHomePage from './components/AdminHomePage/AdminHomePage';
import TripDetailsPage from './components/TripDetailsPage/TripDetailsPage';
import CreateTripPage from './components/CreateTripPage/CreateTripPage';

export default function App() {
  return(
  <BrowserRouter>
    <Switch>

      <Route exact path={"/"}>
        <HomePage/>
      </Route>

      <Route exact path={"/trips/application"}>
        <ApplicationFormPage/>
      </Route>

      <Route exact path={"/login"}>
        <LoginPage/>
      </Route>

      <Route exact path={"/trips/list"}>
        <ListTripsPage/>
      </Route>

      <Route exact path={"/admin/trips/list"}>
        <AdminHomePage/>
      </Route>

      <Route exact path={"/admin/trips/:id"}>
        <TripDetailsPage/>
      </Route>

      <Route exact path={"/admin/trips/create"}>
        <CreateTripPage/>
      </Route>

      <Route>
        <HomePage/>
      </Route>

    </Switch>
  </BrowserRouter>
  )
}