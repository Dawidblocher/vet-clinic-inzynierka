import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(LinkRouter)`
  color: ${({ theme }) => theme.accentColor};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accentColorHover};
    text-decoration: underline;
  }
`;

const Link = ({ children, ...rest }) => <StyledLink {...rest}>{children}</StyledLink>;

Link.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Link;
