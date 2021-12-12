import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa'
import {FooterContainer, 
        FooterLinks, 
        FooterWrap, 
        FooterLinksItems, 
        FooterLinksWrapper, 
        FooterLinksContainer, 
        FooterLinksTitle, 
        SocialIconsLink, 
        SocialIcons,
        SocialLogo,
        SocialMedia,
        SocialMediaWrap, 
        WebsiteRight,
        FooterStyle
        } from './FooterComponents'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>Tentang Kami</FooterLinksTitle>
                                <FooterLinks to="/">Bagaimana Kami</FooterLinks>
                                <FooterLinks to="/">Testimonial</FooterLinks>
                                <FooterLinks to="/">Karir</FooterLinks>
                                <FooterLinks to="/">Invest Dengan Kami</FooterLinks>
                                <FooterLinks to="/">Kebijakan</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Berkembang</FooterLinksTitle>
                                <FooterLinks to="/">Sponsor Link</FooterLinks>
                                <FooterLinks to="/">Nama Bank</FooterLinks>
                                <FooterLinks to="/">Pendiri</FooterLinks>
                                <FooterLinks to="/">Kontrak</FooterLinks>
                                <FooterLinks to="/">Pelajari Lebih</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>Management</FooterLinksTitle>
                                <FooterLinks to="/">Produk Andalan</FooterLinks>
                                <FooterLinks to="/">Pengalaman</FooterLinks>
                                <FooterLinks to="/">Karir Pengembang</FooterLinks>
                                <FooterLinks to="/">Diskon</FooterLinks>
                                <FooterLinks to="/">Kompetitif</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Harga</FooterLinksTitle>
                                <FooterLinks to="/">Perbulan</FooterLinks>
                                <FooterLinks to="/">Pertahun</FooterLinks>
                                <FooterLinks to="/">Teknisi</FooterLinks>
                                <FooterLinks to="/">Bergabung</FooterLinks>
                                <FooterLinks to="/">Lihat Lebih</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Uangku<span>.com</span>
                        </SocialLogo>
                        <WebsiteRight><FooterStyle>dika911</FooterStyle> © {new Date().getFullYear()} All rights reserved.</WebsiteRight>
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Pinterest">
                                <FaPinterest />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
