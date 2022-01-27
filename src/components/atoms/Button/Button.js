import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 6px 16px;
  border-radius: 13px;
  border: 0;
  font-size: 13px;
  cursor: pointer;
  ${({ secondary }) =>
    secondary
      ? css`
          /* secondary */
          background: #fff;
          color: ${({ theme }) => theme.accentColor};
          font-weight: 500;
          border: 2px solid ${({ theme }) => theme.accentColor};
        `
      : css`
          /* primary */
          background: ${({ theme }) => theme.accentColor};
          color: #ffffff;
          font-weight: 500;
          &:hover {
            background: ${({ theme }) => theme.accentColorHover};
          }
        `};
`;

const Button = ({ secondary, children, ...rest }) => (
  <StyledButton secondary={secondary} {...rest}>
    {children}
  </StyledButton>
);
Button.propTypes = {
  children: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};
Button.defaultProps = {
  secondary: false,
};

export default Button;
