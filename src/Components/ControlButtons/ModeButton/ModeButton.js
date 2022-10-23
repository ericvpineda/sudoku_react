import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { gridActions } from "../../../store/grid";

const ModeButton = () => {
    const dispatch = useDispatch() 

    const onClickHandler = () => {
        dispatch(gridActions.activateDifficultyModal(true))
    }
    
    return (
        <Button onClick={onClickHandler}>Mode</Button>
    )
} 

export default ModeButton;