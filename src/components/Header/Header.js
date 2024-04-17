import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
import BusinessINfo from '../BusinessInfo/BusinessINfo';


const Header = () => {
    return (
        <div className='header-container'>
         <Navbar></Navbar>
         <HeaderMain></HeaderMain>
         <BusinessINfo></BusinessINfo>
    
        </div>
    );
};

export default Header;