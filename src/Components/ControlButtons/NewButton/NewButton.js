import Button from "../../UI/Button/Button";
import { gridActions } from "../../../store/grid";
import { useDispatch } from "react-redux";

const NewButton = () => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(gridActions.newGame())
    }

    return (
        <Button onClick={onClickHandler}>New</Button>
    )
} 

export default NewButton;