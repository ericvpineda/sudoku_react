import { useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import { gridActions } from "../../../store/grid";

const SolveButton = () => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(gridActions.solveGame());
    }

    return (
        <Button onClick={onClickHandler}>Solve</Button>
    )
} 

export default SolveButton;