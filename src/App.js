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
import { ProfilePage } from './pages/profile-page';
import { ProductPage } from './pages/product-page';
import firebaseInit from './js/firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

firebaseInit()

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
         <ToastContainer />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/admin' component={AdminPage} />
          <Route path='/profile' component={ProfilePage}/>
          <Route path='/login' component={LoginPage} />
          <Route path='/item/:itemId' component={ProductPage} />

        </Switch>
        <Footer />
      </div>
    </Router>

  )
}



export default App;



