import React, { useState, useEffect } from 'react';
import { CgMenuRight } from 'react-icons/cg'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, NavItem, MobileIcon, NavBtn, NavBtnLink, Money } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                    <Money color="white" />
                        Uangku
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <CgMenuRight />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                            to='/'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='mobile'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Mobile</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Akun</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar