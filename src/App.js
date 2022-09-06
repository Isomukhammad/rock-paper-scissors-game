import Scoreboard from './components/scoreboard/scoreboard.component';

import styles from './App.module.css';
import Buttons from './components/buttons/buttons.component';
import RulesButton from './components/rules-button/rules-button.component';

const App = () => {
  return(
    <div className={styles.div}>
      <Scoreboard />
      <Buttons />
      <RulesButton />
    </div>
  )
}

export default App;