import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarWrapper,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                    to='/'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Home
                    </SidebarLink>
                    <SidebarLink 
                    to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Services
                    </SidebarLink>
                    <SidebarLink 
                    to='mobile'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Mobile
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Akun</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
