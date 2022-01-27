import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlign }) => textAlign}; ;
`;

const Paragraph = ({ children, marginBottom, fontSize, textAlign }) => (
  <StyledParagraph marginBottom={marginBottom} fontSize={fontSize} textAlign={textAlign}>
    {children}
  </StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  marginBottom: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.string,
};

Paragraph.defaultProps = {
  marginBottom: '1.5rem',
  fontSize: '1.2rem',
  textAlign: 'left',
};

export default Paragraph;
