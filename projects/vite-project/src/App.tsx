import { FirstComponent } from '@fedorovskyi/ui-kit/first-component';
import { SecondComponent } from '@fedorovskyi/ui-kit/second-component';
import { ThemeSwitcher } from './components/theme-switcher';
import { InternalCard } from './components/internal-card';

export const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      <FirstComponent />
      <SecondComponent message="Hello from Second Component!" />
      <InternalCard />
    </div>
  );
};
