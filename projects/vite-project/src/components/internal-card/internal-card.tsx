import * as React from 'react';
import { styled } from '@pigment-css/react';
import { tokens } from '@fedorovskyi/theme';

const Card = styled('div')({
  border: `1px solid ${tokens.colors.primary100}`,
  borderRadius: '8px',
  padding: '10px',
  maxWidth: '300px',
  backgroundColor: tokens.colors.neutral100,
  color: tokens.colors.textNeutral100,
  marginTop: '10px',
});

const Title = styled('h2')({
  color: tokens.colors.textNeutral100,
});

export const InternalCard = () => {
  return (
    <Card>
      <Title>Internal Card</Title>
    </Card>
  );
};
