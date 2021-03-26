import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <Link  to='/admin'>
                        View Orders
                    </Link>
                </li>
                <li>
                    <Link  to='/admin/available-products'>
                        Available products
                    </Link>
                </li>

            </ul>
        </aside>
    )
}

export default Sidebar
