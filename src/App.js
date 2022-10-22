// import './App.css';
import {Fragment} from 'react'
import Grid from './Components/Grid/Grid/Grid';
import ControlButtons from './Components/ControlButtons/ControlButtons/ControlButtons';

function App() {
  return (
    <Fragment>
      <main>
        <Grid></Grid>
        <ControlButtons></ControlButtons>
      </main>
    </Fragment>
  );
}

export default App;
