import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Products from './Products'
import AddProduct from './AddProduct'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/products'} className="nav-link">Products</Link>
              </li>
            </ul>
          </div>
        </nav> <br />
        <h2>Welcome !!</h2>
        <Switch>
              <Route path='/products' component={ Products } />
              <Route path='/addproduct' component={ AddProduct } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
