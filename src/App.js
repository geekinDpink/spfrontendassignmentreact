import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Footer from "./pages/components/Footer";

export default function App() {
  return (
    <Container>
    <Router>

      <Nav variant="tabs" defaultActiveKey="/" className="navBar">
      <img src="photos/banner.jpg" id="banner"></img>
      
      <Nav.Item>
        <Nav.Link>
          <Link to="/" className="navTab">Home</Link>
        </Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link>
          <Link to="/about" className="navTab">About</Link>
        </Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link>
          <Link to="/order" className="navTab">Order</Link>
        </Nav.Link>
        </Nav.Item>
         
      </Nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
    </Container>
  );
}






