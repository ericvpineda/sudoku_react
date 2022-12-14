import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { gridActions } from "../../../store/grid";
import styles from './Number.module.css'

const Number = (props) => {
    const dispatch = useDispatch();
    const selectedCell = useSelector(state => state.cell.selectedCell);
    const [row, col] = useSelector(state => state.cell.selectedCell);
    const initialGrid = useSelector(state => state.grid.initialGrid)

    const onClickHandler = () => {
    if (row != null && col != null && initialGrid && initialGrid[row][col] === '.') {
        let num = props.children.toString();
        dispatch(gridActions.fillCell([num, selectedCell]))
        }
    }

    return (
        <Button addStyles={styles.number} onClick={onClickHandler}>{props.children}</Button>
    )
}

export default Number;