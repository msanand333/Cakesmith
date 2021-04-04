import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <NavLink  to='/profile/orders' activeClassName="selected">
                        Current Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink  to='/profile/account-info' activeClassName="selected">
                        Account Info
                    </NavLink>
                </li>
 
                <li>
                    <NavLink  to='/profile/order-history' activeClassName="selected">
                        Order History
                    </NavLink>
                </li>

            </ul>

        </aside>
    )
}

export default Sidebar
