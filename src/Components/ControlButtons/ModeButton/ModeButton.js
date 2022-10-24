import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { gridActions } from "../../../store/grid";
import styles from '../ControlButtons/ControlButtons.module.css'

const ModeButton = () => {
    const dispatch = useDispatch() 

    const onClickHandler = () => {
        dispatch(gridActions.activateDifficultyModal(true))
    }
    
    return (
        <Button addStyles={styles.individualButton} onClick={onClickHandler}>Mode</Button>
    )
} 

export default ModeButton;