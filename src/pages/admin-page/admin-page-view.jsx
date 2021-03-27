import React from 'react';
import Sidebar from './sub-components/sidebar'
import ReceivedOrders from './sub-pages/received-orders';
import AvailableProducts from './sub-pages/available-products';
import { Switch, Route } from 'react-router-dom';

const AdminPageView = () => {
    return (
        <div className="admin-page">
            <Sidebar />
            <section className="wrapper">
                <Switch>
                    <Route path='/admin' exact component={ReceivedOrders} />
                    <Route path='/admin/available-products' component={AvailableProducts} />
                </Switch>
            </section>

        </div>
    )
}

export default AdminPageView
