import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { gridActions } from "../../../store/grid";
import styles from '../ControlButtons/ControlButtons.module.css'

// Note: 
// - Only want to erase input buttons
// - May suffer from issue of only erase from previous board if new board is made
const EraseButton = () => {
    const dispatch = useDispatch()
    const selectedCell = useSelector(state => state.cell.selectedCell) 

    const onClickHandler = () => {
        dispatch(gridActions.eraseCell(selectedCell))
    }

    return (
        <Button addStyles={styles.individualButton} onClick={onClickHandler}>Erase</Button>
    )
} 

export default EraseButton;