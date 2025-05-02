import React from 'react';
import Navbar from '../header/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Root;