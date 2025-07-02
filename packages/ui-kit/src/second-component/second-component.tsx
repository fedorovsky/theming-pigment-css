import * as React from 'react';
import * as Styled from './second-component.styled';

export interface SecondComponentProps {
  message?: string;
}

export const SecondComponent = ({ message }: SecondComponentProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title size="large">UI Kit - Second Component</Styled.Title>
      <Styled.Title size="small">UI Kit - Second Component</Styled.Title>
      <p>{message}</p>
    </Styled.Wrapper>
  );
};
