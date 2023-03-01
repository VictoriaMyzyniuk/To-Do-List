import styled from '@emotion/styled';

export const FormEl = styled.form`
  width: 700px;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  flex-direction: row;
`;

export const LabelEl = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 30px;
`;

export const ErrorMessage = styled.div`
  color: ${props => {
    return props.error ? 'red' : 'transparent';
  }};
`;

export const InputEl = styled.input`
  width: 200px;

  border-color: ${props => {
    return props.error ? 'red' : 'grey';
  }};
`;
