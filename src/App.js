import Scoreboard from './components/scoreboard/scoreboard.component';

import styles from './App.module.css';
import Buttons from './components/buttons/buttons.component';
import RulesButton from './components/rules-button/rules-button.component';
import { useSelector } from 'react-redux';
import { selectAction, selectOpponentChoice } from './store/score/score.selector';
import Result from './components/result/result.component';
import { useEffect } from 'react';

const App = () => {
  const action = useSelector(selectAction);
  const opponentChoice = useSelector(selectOpponentChoice)

  useEffect(() => {
    console.log(opponentChoice)
  }, [opponentChoice])

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