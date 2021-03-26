import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <Link  to='/profile'>
                        Current Orders
                    </Link>
                </li>
                <li>
                    <Link  to='/profile/order-history'>
                        Order History
                    </Link>
                </li>

            </ul>

        </aside>
    )
}

export default Sidebar
