import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {BtnContainer} from './Button';

export default class NavBar extends Component{
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt='cheetahws' className='navbar-brand' />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className='nav-link'>
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <BtnContainer cart>
                        <span className="mr-2">
                            <i className='fas fa-cart-plus'></i>
                        </span>
                        My Cart
                    </BtnContainer>
                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
background: var(--navbar);
.nav-link{
    color: var(--text-color) !important;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: capitalize !important;
}
`;
