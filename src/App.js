import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SingleProduct from './components/singleProduct/SingleProduct';
import About from './components/about/About';
import Advices from './components/advices/Advices';
import Recipe from './components/recipe/Recipe';
import RecipePage from './components/recipePage/RecipePage';
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
    <p>© 2023 Green Food Brands. All Rights Reserved.</p>
    <div class="form-row">
  <input type="email" placeholder="Enter your email to sign " class="email-input"/>
  <button class="submit-button">Get Healthy News</button>
</div>
    </div>
      </footer>
    </Router>
}

export default App;
