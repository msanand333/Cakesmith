import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <NavLink  to='/admin/order' activeClassName="selected">
                        View Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/available-products' activeClassName="selected">
                        Available products
                    </NavLink>
                </li>

            </ul>
        </aside>
    )
}

export default Sidebar
