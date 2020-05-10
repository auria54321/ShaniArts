import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import ContactsPage from "./pages/contacts/contacts.component";
import AboutPage from "./pages/about/about.component";
import DeliveryPage from "./pages/delivery/delivery.component";
import CommissionsPage from "./pages/commissions/commissions.component";
import HomePage from "./pages/homepage/homepage.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/shop" />
        <Route exact path="/commissions" component={CommissionsPage} />
        <Route exact path="/delivery" component={DeliveryPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route path="/shop" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
