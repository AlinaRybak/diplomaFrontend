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
import LoginPage from './components/loginPage/LoginPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import ArticleOne from './components/articleOne/ArticleOne';
import ArticleTwo from './components/articleTwo/ArticleTwo';
import ArticleThree from './components/articleThree/ArticleThree';
import ArticleFour from './components/articleFour/ArticleFour';
import RegisterPage from './components/registerPage/RegisterPage';
import { useState } from 'react';


function App() {
  const [userName, setUserName] = useState('');

  return <Router>
      <header id='top'><Header userName={userName} />
      <button className="go-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>top</button>
      </header>
    <div className='container font-style'>
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
          <Route path="/register"><RegisterPage setUserName={setUserName} /> </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="/ArticleOne" component={ArticleOne} />
          <Route path="/ArticleTwo" component={ArticleTwo} />
          <Route path="/ArticleThree" component={ArticleThree} />
          <Route path="/ArticleFour" component={ArticleFour} />
          <Route path="/">
          <Advices/>
        </Route>
        </Switch>
    </div>
    <footer>
    <div className='d-flex p-3 justify-content-between footer'>
    <div>© 2023 Green Food Brands. All Rights Reserved.</div>
    <div className='social-icons'>
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2xl"/>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2xl"/>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faYoutube} size="2xl" />
      </a>
    </div>
      </div>
      </footer>
    </Router>
}

export default App;
