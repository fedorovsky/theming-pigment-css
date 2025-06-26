import { PigmentCard } from '@fedorovskyi/ui-kit';
import { ThemeSwitcher } from '@/app/_components/theme-switcher';
import { InternalCard } from '@/app/_components/internal-card';

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <PigmentCard />
      <InternalCard />
    </div>
  );
}
