import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { gridActions } from "../../../store/grid";

const Number = (props) => {
    const dispatch = useDispatch();
    const selectedCell = useSelector(state => state.cell.selectedCell);
    
    const onClickHandler = () => {
        dispatch(gridActions.fillCell([props.children, selectedCell]))
    }

    return (
        <Button onClick={onClickHandler}>{props.children}</Button>
    )
}

export default Number;