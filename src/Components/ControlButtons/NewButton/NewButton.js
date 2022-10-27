import Button from "../../UI/Button/Button";
import { gridActions } from "../../../store/grid";
import { useDispatch, useSelector } from "react-redux";
import styles from '../ControlButtons/ControlButtons.module.css'

const NewButton = () => {
    const dispatch = useDispatch();
    const difficulty = useSelector(state => state.grid.difficulty)

    const onClickHandler = () => {
        dispatch(gridActions.newGame(difficulty))
    }

    return (
        <Button addStyles={styles.individualButton} onClick={onClickHandler}>New</Button>
    )
} 

export default NewButton;