import React from 'react'
import LogoMain from '../../assets/logo-main.png'
import WhatsAppLogo from '../../assets/whatsapp-logo.png'
import CallLogo from '../../assets/call-logo.png'
import { HeaderContainer ,RightHeaderSide,LeftHeaderSide,ContactContainers,LogoCall,LogoWhatsapp} from './Header.style'

const Header = () => {
  return (
    <HeaderContainer>
        <LeftHeaderSide>
        <img src={LogoMain} alt="Main-Logo" />
        </LeftHeaderSide>
        <RightHeaderSide>
            <ContactContainers><LogoWhatsapp src={WhatsAppLogo} alt="" />WhatsApp</ContactContainers>
            <ContactContainers><LogoCall src={CallLogo} alt="" />Call us</ContactContainers>
        </RightHeaderSide>
    </HeaderContainer>
  )
}

export default Header