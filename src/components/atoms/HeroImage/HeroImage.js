import React from 'react';
import styled from 'styled-components';
import heroSrc from 'assets/jpg/hero.jpg';

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  right: 0;
  top: 0;
`;
const HeroWrapper = styled.div`
  width: 45%;
  position: relative;
  height: 100%;
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 21, 68, 0.72);
    top: 0;
    left: 0;
  }
`;
const HeroImage = () => (
  <HeroWrapper>
    <StyledImage src={heroSrc} />
  </HeroWrapper>
);

export default HeroImage;
