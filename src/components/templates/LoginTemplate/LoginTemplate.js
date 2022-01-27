import React from 'react';
import LoginForm from 'components/organisms/LoginForm/LoginForm';
import HeroImage from 'components/atoms/HeroImage/HeroImage';
import styled from 'styled-components';
import HeaderWithoutNav from 'components/organisms/HeaderWithoutNav/HeaderWithoutNav';

const StyledLoginWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
`;
const LoginTemplate = () => (
  <div>
    <HeaderWithoutNav />
    <StyledLoginWrapper>
      <LoginForm />
      <HeroImage />
    </StyledLoginWrapper>
  </div>
);

export default LoginTemplate;
