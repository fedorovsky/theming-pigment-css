import { PigmentCard } from '@fedorovskyi/ui-kit';
import {ThemeSwitcher} from "./components/theme-switcher";
import {InternalCard} from "./components/internal-card";


function App() {
  return (
    <>
        <ThemeSwitcher />
      <PigmentCard />
        <InternalCard />
    </>
  )
}

export default App
