import { useSelector } from 'react-redux';

import { selectAction } from './store/score/score.selector';

import Scoreboard from './components/scoreboard/scoreboard.component';
import Buttons from './components/buttons/buttons.component';
import RulesButton from './components/rules-button/rules-button.component';
import Result from './components/result/result.component';

import styles from './App.module.css';

const App = () => {
  const action = useSelector(selectAction);

  return(
    <div className={styles.div}>
      <Scoreboard />
      {
        action === true ? <Buttons /> : <Result />
      }
      <RulesButton />
    </div>
  )
}

export default App;