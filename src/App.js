import './assets/styles/app.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './pages/home-page';
import { ShopPage } from './pages/shop-page';
import { CartPage } from './pages/cart-page';
import { PaymentPage } from './pages/payment-page';
import { AdminPage } from './pages/admin-page';
import { LoginPage } from './pages/login-page';

const App = () => {
  return (
    
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/admin' component={AdminPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
        <Footer />
      </div>
    </Router>

  )
}



export default App;



