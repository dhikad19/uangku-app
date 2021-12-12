import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'
import styled from 'styled-components'
import { FaQuinscape } from 'react-icons/fa'

export const Money = styled(FaQuinscape)`
    color: #fff;
    display: flex;
    margin-right: 10px;
    font-size: 30px;
    margin-left: -28px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        font-size: 25px;
    }
`

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000;' : 'rgba(0, 0, 0, 0.736);')};
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    z-index: 10;
    transition: 1s all ease;
    color: white;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    align-items: center;
    font-weight: 500;
    text-decoration: none;
    transition: 0.5s ease-out;

    @media screen and (max-width: 780px)  {
        font-size: 1.5rem;
        margin-left: -5px;
    }

    span {
        color: #fff;
        margin-right: 5px;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin-right: -11px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
}
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 70px;
`

export const NavItem1 = styled(LinkR)`
    height: 70px;
    text-decoration: none;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 3px solid transparent;

    &.active {
        border-bottom: 3px solid #fff;
    }

    &:hover {
        border-bottom: 3px solid #fff;
        color: #fff;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 5px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: 2px solid #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000;
    }
`
