import React, { Component } from 'react';
import './App.css';
import {AddGame} from './components/addGame';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TopGames } from './components/topGames';


class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/my-games">My Games</Nav.Link>
              <Nav.Link href="/add-games">Add Games</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>

          <br />

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/my-games' component={TopGames} exact />
            <Route path='/add-games' component={AddGame} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
