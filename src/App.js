// import './App.css';
import {Fragment} from 'react'
import Grid from './Components/Grid/Grid/Grid';
import ControlButtons from './Components/ControlButtons/ControlButtons/ControlButtons';
import NumPad from './Components/NumPad/NumPad/NumPad';

function App() {
  return (
    <Fragment>
      <main>
        <Grid></Grid>
        <ControlButtons></ControlButtons>
      </main>
      <NumPad></NumPad>
    </Fragment>
  );
}

export default App;
