import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SingleProduct from './components/singleProduct/SingleProduct';
import About from './components/about/About';
import Advices from './components/home/home';
import Recipe from './components/recipe/Recipe';
import RecipePage from './components/recipePage/RecipePage';
import OrderForm from './components/orderForm/OrderForm';
import Confirmation from './components/confirmation/Confirmation';
import Confirm from './components/confirm/Confirm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from 'react-bootstrap/Nav';


function App() {
  return <Router>
      <header><Header/></header>
    <div className='container'>
    <Nav
      variant="pills"
    >
      <Nav.Item>
      <Link to="/" className={`nav-link ${document.location.pathname==='/'} custom-link`}>Home</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/about" className={`nav-link ${document.location.pathname==='/about' ? 'active' : ''} custom-link`}>About us</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/products" className={`nav-link ${document.location.pathname==='/products' ? 'active' : ''} custom-link`}>Products</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/recipes" className={`nav-link ${document.location.pathname==='/recipes' ? 'active' : ''} custom-link`}>Recipes</Link>
      </Nav.Item>
    </Nav>
    <Switch>
    <Route path="/confirm">
          <Confirm/>
          </Route> 
    <Route path="/confirmation">
          <Confirmation/>
          </Route> 
          <Route path="/order">
          <OrderForm/>
          </Route>
          <Route path="/recipes">
          <Recipe/>
          </Route>
          <Route path="/recipe/:id">
          <RecipePage/>
          </Route>
          <Route path="/products">
          <Products/>
          </Route>
          <Route path="/product/:id">
          <SingleProduct/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <Advices/>
        </Route>
        </Switch>
    </div>
    <footer><div className='copiwrite'>
    <div>© 2023 Green Food Brands. All Rights Reserved.</div>
    </div>
      </footer>
    </Router>
}

export default App;
