import Card from "../../Card/Card";
import styles from './SolvedModal.module.css'
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { gridActions } from "../../../../store/grid";
import { randomGrid } from "../../../../utils/utils";

const BackDrop = () => {
    return <div className={styles.backdrop}></div>
}

const ModalOverlay = () => {
    const dispatch = useDispatch();
    const currDifficulty = useSelector(state => state.grid.difficulty)

    const onClickHandler = () => {
        const newGridLogistics = randomGrid(currDifficulty)
        dispatch(gridActions.newGame(newGridLogistics))
    }

    return (
        <Card addStyles={styles.modal}>
            <h2> &#x1F389;Congrats!&#x1F389; </h2>
            <Button addStyles={styles.button} onClick={onClickHandler}>Play again?</Button>
        </Card>
    )
}

const SolvedModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}></BackDrop>,
            document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm}></ModalOverlay>,
            document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default SolvedModal;