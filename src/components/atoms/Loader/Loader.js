import React from 'react';
import LoaderSrc from 'assets/Loader2.gif';
import styled from 'styled-components';

const StyledLoaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

function Loader() {
  return (
    <StyledLoaderWrapper>
      <img src={LoaderSrc} alt="Loading" />
    </StyledLoaderWrapper>
  );
}

export default Loader;
