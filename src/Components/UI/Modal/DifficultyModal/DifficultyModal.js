import Card from "../../Card/Card";
import styles from './DifficultyModal.module.css'
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import { gridActions } from "../../../../store/grid";
import { randomGrid } from "../../../../utils/utils";

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
    const dispatch = useDispatch();

    const onClickHandler = (mode) => {
        const newGridLogistics = randomGrid(mode)
        dispatch(gridActions.changeDifficulty(newGridLogistics))
        props.onConfirm()
    }

    return (
        <Card addStyles={styles.modal}>
            <header>
                <h2>
                    Select Difficulty&#x1F914;
                </h2>
            </header>
            <div className={styles.buttonRow}>
                <Button addStyles={styles.button} onClick={() => onClickHandler('easy')}>Easy</Button>
                <Button addStyles={styles.button} onClick={() => onClickHandler('medium')}>Med</Button>
                <Button addStyles={styles.button} onClick={() => onClickHandler('hard')}>Hard</Button>
            </div>
        </Card>
    )
}

const DifficultyModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}></BackDrop>,
            document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm}></ModalOverlay>,
            document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default DifficultyModal;