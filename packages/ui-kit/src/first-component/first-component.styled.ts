import { styled } from '@pigment-css/react';
import { tokens } from '@fedorovskyi/theme';

export const Wrapper = styled('div')({
  border: `1px solid ${tokens.colors.primary100}`,
  borderRadius: '8px',
  padding: '10px',
  maxWidth: '300px',
  backgroundColor: tokens.colors.neutral100,
  color: tokens.colors.textNeutral100,
});
