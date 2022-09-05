import { useState } from 'react';
import Scoreboard from './components/scoreboard/scoreboard.component';

import styles from './App.module.css';
import Buttons from './components/buttons/buttons.component';
import RulesButton from './components/rules-button/rules-button.component';

const App = () => {
  const [score, setScore] = useState(0);
  return(
    <div className={styles.div}>
      <Scoreboard score = {score}/>
      <Buttons />
      <RulesButton />
    </div>
  )
}

export default App;