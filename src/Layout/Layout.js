import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;