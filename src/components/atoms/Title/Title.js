import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  font-size: 40px;
  font-weight: 900;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  margin-bottom: 43px;
  margin-top: 0;
`;

const Title = ({ children, textAlign }) => (
  <StyledTitle textAlign={textAlign}>{children}</StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string.isRequired,
};

export default Title;
