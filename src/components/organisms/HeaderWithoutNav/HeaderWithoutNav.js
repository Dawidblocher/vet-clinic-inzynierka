import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';

const StyledHeader = styled.header`
  padding: 42px 55px;
  position: absolute;
  left: 0;
  top: 0;
`;

const HeaderWithoutNav = () => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
);

export default HeaderWithoutNav;
