import { FirstComponent } from '@fedorovskyi/ui-kit/first-component';
import { SecondComponent } from '@fedorovskyi/ui-kit/second-component';
import { ThemeSwitcher } from '@/app/_components/theme-switcher';
import { InternalCard } from '@/app/_components/internal-card';

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <FirstComponent />
      <SecondComponent message="Hello from Second Component!" />
      <InternalCard />
    </div>
  );
}
