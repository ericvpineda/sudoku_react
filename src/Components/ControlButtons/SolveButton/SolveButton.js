import { useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import { gridActions } from "../../../store/grid";
import styles from '../ControlButtons/ControlButtons.module.css'

const SolveButton = () => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(gridActions.solveGame());
    }

    return (
        <Button addStyles={styles.individualButton} onClick={onClickHandler}>Solve</Button>
    )
} 

export default SolveButton;