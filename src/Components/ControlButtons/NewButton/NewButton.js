import Button from "../../UI/Button/Button";
import { gridActions } from "../../../store/grid";
import { useDispatch, useSelector } from "react-redux";
import styles from '../ControlButtons/ControlButtons.module.css'
import { randomGrid } from "../../../utils/utils";

const NewButton = () => {
    const dispatch = useDispatch();
    const currDifficulty = useSelector(state => state.grid.difficulty)

    const onClickHandler = () => {
        const newGridLogistics = randomGrid(currDifficulty)
        dispatch(gridActions.newGame(newGridLogistics))
    }

    return (
        <Button addStyles={styles.individualButton} onClick={onClickHandler}>New</Button>
    )
} 

export default NewButton;