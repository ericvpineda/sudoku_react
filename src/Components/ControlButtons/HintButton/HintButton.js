import Button from "../../UI/Button/Button";
import { gridActions } from "../../../store/grid";
import { nextHint } from "../../../utils/utils";
import { useSelector, useDispatch } from "react-redux";

const HintButton = () => {
    const dispatch = useDispatch();
    const initialGrid = useSelector(state => state.grid.initialGrid);
    const workingGrid = useSelector(state => state.grid.workingGrid);
    const solvedGrid = useSelector(state => state.grid.solvedGrid);
    const [sRow, sCol] = useSelector(state => state.cell.selectedCell);
    const [nRow, nCol] = nextHint(workingGrid, solvedGrid)
    const isInputCell = sRow != null && sCol != null && initialGrid[sRow][sCol] === '.';

    const onClickHandler = () => {
        if (isInputCell && workingGrid[sRow][sCol] !== solvedGrid[sRow][sCol]) {
            dispatch(gridActions.getHint([sRow, sCol]))
        } else {
            dispatch(gridActions.getHint([nRow, nCol]))
        }
    }

    return (
        <Button onClick={onClickHandler}>Hint</Button>
    )
} 

export default HintButton;