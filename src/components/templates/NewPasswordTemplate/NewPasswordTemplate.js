import React from 'react';
import NewPasswordForm from 'components/organisms/NewPassword/NewPasswordForm';
import HeroImage from 'components/atoms/HeroImage/HeroImage';
import styled from 'styled-components';
import HeaderWithoutNav from 'components/organisms/HeaderWithoutNav/HeaderWithoutNav';

const StyledRegisterWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
`;
const NewPasswordTemplate = () => (
  <div>
    <HeaderWithoutNav />
    <StyledRegisterWrapper>
      <NewPasswordForm />
      <HeroImage />
    </StyledRegisterWrapper>
  </div>
);

export default NewPasswordTemplate;
