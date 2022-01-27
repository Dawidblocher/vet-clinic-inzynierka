import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckIcon from 'components/atoms/CheckIcon/CheckIcon';

const StyledField = styled(Field)`
  opacity: 0;
  position: absolute;

  & + span {
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid #414141;
    border-radius: 3px;
    margin-right: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      opacity: 0;
    }
  }

  &:checked + span {
    svg {
      opacity: 1;
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 'inherit'};
`;

const Checkbox = ({ marginBottom, name, label, ...rest }) => (
  <StyledLabel htmlFor={name} marginBottom={marginBottom}>
    <StyledField type="checkbox" name={name} {...rest} id={name} />
    <span>
      <CheckIcon />
    </span>
    <span>{label}</span>
  </StyledLabel>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
};

Checkbox.defaultProps = {
  marginBottom: '0rem',
};

export default Checkbox;
