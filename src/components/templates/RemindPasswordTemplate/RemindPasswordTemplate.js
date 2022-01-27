import React from 'react';
import RemindPasswordForm from 'components/organisms/RemindPasswordForm/RemindPasswordForm';
import HeroImage from 'components/atoms/HeroImage/HeroImage';
import styled from 'styled-components';
import HeaderWithoutNav from 'components/organisms/HeaderWithoutNav/HeaderWithoutNav';

const StyledLoginWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
`;
const RemindPasswordTemplate = () => (
  <div>
    <HeaderWithoutNav />
    <StyledLoginWrapper>
      <RemindPasswordForm />
      <HeroImage />
    </StyledLoginWrapper>
  </div>
);

export default RemindPasswordTemplate;
