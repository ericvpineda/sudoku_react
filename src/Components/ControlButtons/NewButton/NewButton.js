import Button from "../../UI/Button/Button";
import { gridActions } from "../../../store/grid";
import { useDispatch } from "react-redux";
import styles from '../ControlButtons/ControlButtons.module.css'

const NewButton = () => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(gridActions.newGame())
    }

    return (
        <Button addStyles={styles.individualButton} onClick={onClickHandler}>New</Button>
    )
} 

export default NewButton;