import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sub-components/sidebar';
import OrderHistory from './sub-pages/order-history';
import CurrentOrders from './sub-pages/current-orders';
import AccountInfo from './sub-pages/account-info';

const ProfilePageView = () => {
    return (
        <main className="profile-page">
            <Sidebar />
            <section className="wrapper">
                <Switch>
                    <Route path='/profile/orders' exact component={CurrentOrders} />
                    <Route path='/profile/order-history' component={OrderHistory} />
                    <Route path='/profile/account-info' component={AccountInfo} />
                </Switch>
            </section>
            
        </main>
    )
}

export default ProfilePageView
