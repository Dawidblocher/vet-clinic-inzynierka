import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TextInput = ({ valid, name, placeholder, marginBottom, ...rest }) => {
  const { errors, touched } = valid;
  return (
    <StyledWrapper marginBottom={marginBottom}>
      <StyledField
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
        error={touched[name] && errors[name]}
      />
      <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
      {errors[name] && touched[name] ? <StyledError>{errors[name]}</StyledError> : null}
    </StyledWrapper>
  );
};

const StyledField = styled(Field)`
  background: #ffffff;
  border-radius: 7px;
  border: 0;
  padding: 9px 19px;
  width: 100%;
  border: 1px solid transparent;
  font-size: 13px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    font-size: 13px;
  }

  &:-webkit-autofill + label,
  &:-webkit-autofill:hover + label,
  &:-webkit-autofill:focus + label,
  &:-webkit-autofill:active + label {
    transform: translateY(-28px);
    font-size: 11px;
    color: ${({ theme }) => theme.textColorLight};
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown + label {
    transform: translateY(-50%);
    font-size: 13px;
    color: ${({ theme }) => theme.textColor};
  }

  &:focus {
    border: 0;
    outline: none;
    border: 1px solid ${({ theme }) => theme.accentColor};
  }

  &:not([value]) {
  }

  &:focus + label {
    transform: translateY(-28px);
    font-size: 11px;
    color: ${({ theme }) => theme.textColorLight};
  }

  ${({ error }) =>
    error
      ? css`
          border: 1px solid ${({ theme }) => theme.warrningColor};

          &:focus {
            border: 1px solid ${({ theme }) => theme.warrningColor};
          }
        `
      : null}
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 11px;

  line-height: 14px;
  position: absolute;
  top: 50%;
  left: 17px;
  transform: translateY(-28px);
  color: ${({ theme }) => theme.textColorLight};
  transition: 0.3s;
  padding: 2px 10px;
  background: #fff;
  border-radius: 5px;
  cursor: text;
`;

const StyledWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ marginBottom }) => marginBottom || '3.6rem'};
`;

const StyledError = styled.div`
  color: ${({ theme }) => theme.warrningColor};
  position: absolute;
  bottom: -18px;
  font-size: 12px;
  left: 19px;
`;

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  valid: PropTypes.shape({
    errors: PropTypes.objectOf(PropTypes.string),
    touched: PropTypes.objectOf(PropTypes.bool),
  }),
  marginBottom: PropTypes.string,
};

TextInput.defaultProps = {
  valid: {},
  marginBottom: '3.6rem',
};

export default TextInput;
