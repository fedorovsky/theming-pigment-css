import React from 'react';
import { PigmentCard } from '@fedorovskyi/ui-kit';
import { ThemeSwitcher } from './components/theme-switcher';
import { InternalCard } from './components/internal-card';

export const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      <PigmentCard />
      <InternalCard />
    </div>
  );
};
