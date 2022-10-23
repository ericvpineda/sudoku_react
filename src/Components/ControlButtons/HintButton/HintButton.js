import Button from "../../UI/Button/Button";
import { gridActions } from "../../../store/grid";
import { nextHint } from "../../../utils/utils";
import { useSelector, useDispatch } from "react-redux";

const HintButton = () => {
    const dispatch = useDispatch();
    const workingGrid = useSelector(state => state.grid.workingGrid);
    const solvedGrid = useSelector(state => state.grid.solvedGrid);
    const [row, col] = nextHint(workingGrid, solvedGrid)

    const onClickHandler = () => {
        dispatch(gridActions.getHint([row, col]))
    }

    return (
        <Button onClick={onClickHandler}>Hint</Button>
    )
} 

export default HintButton;