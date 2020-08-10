import React from 'react';
import {
    
    Navbar,
   
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
} from 'reactstrap';

import './nav.css';

const NavBar = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Projeto CP</NavbarBrand>


                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Sair</NavLink>
                    </NavItem>
                    
                </Nav>
                

            </Navbar>
        </div >
    );
}

export default NavBar;