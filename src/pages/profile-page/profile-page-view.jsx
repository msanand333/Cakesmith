import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sub-components/sidebar';
import OrderHistory from './sub-pages/order-history';
import CurrentOrders from './sub-pages/current-orders';

const ProfilePageView = () => {
    return (
        <main className="profile-page">
            <Sidebar />
            <section className="wrapper">
                <Switch>
                    <Route path='/profile' exact component={CurrentOrders} />
                    <Route path='/profile/order-history' component={OrderHistory} />
                </Switch>
            </section>
            
        </main>
    )
}

export default ProfilePageView
