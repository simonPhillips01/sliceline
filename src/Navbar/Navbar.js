import React from 'react';
import styled from 'styled-components';
import {pizzaRed} from '../Styles/color';
import {Title} from '../Styles/title';

const NavBarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px black;
`

export function Navbar() {
    return <NavBarStyled>
        <Logo>
            Sliceline 🍕
        </Logo>
    </NavBarStyled>
}