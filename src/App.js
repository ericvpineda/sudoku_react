// import './App.css';
import {Fragment} from 'react'
import Grid from './Components/Grid/Grid/Grid';
import ControlButtons from './Components/ControlButtons/ControlButtons/ControlButtons';
import NumPad from './Components/NumPad/NumPad/NumPad';
import styles from './App.module.css'
import Header from './Components/Header/Header';

function App() {
  return (
    <Fragment>
      <Header></Header>      
      <main className={styles.app}>
        <Grid></Grid>
        <ControlButtons></ControlButtons>
      </main>
      <NumPad></NumPad>
    </Fragment>
  );
}

export default App;
