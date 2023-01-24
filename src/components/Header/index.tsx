import React from 'react';
import Logo from '../../assets/images/ninja.png';
import { HeaderSection, HeaderTitle, NinjaLogo, Separator } from './style';

export const Header = () => {
  return (
    <header>
      <HeaderSection>
        <NinjaLogo src={Logo} alt='Ninja one logo'/>
        <HeaderTitle>Device Manager</HeaderTitle>
      </HeaderSection>
      <Separator/>
    </header>
  )
}
