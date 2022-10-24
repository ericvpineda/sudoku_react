// import styles from './ControlButtons.module.css'
import Card from "../../UI/Card/Card";
import NewButton from "../NewButton/NewButton";
import HintButton from "../HintButton/HintButton";
import EraseButton from "../EraseButton/EraseButton";
import ModeButton from "../ModeButton/ModeButton";
import SolveButton from "../SolveButton/SolveButton";
import styles from './ControlButtons.module.css'

const ControlButtons = () => {
  
  return (
    <Card addStyles={styles.controlButtons}>
      <NewButton></NewButton>
      <ModeButton></ModeButton>
      <HintButton></HintButton>
      <EraseButton></EraseButton>
      <SolveButton></SolveButton>
    </Card>
  );
};

export default ControlButtons;
