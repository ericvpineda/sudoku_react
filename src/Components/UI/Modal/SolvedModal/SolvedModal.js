import Card from "../../Card/Card";
import styles from './SolvedModal.module.css'
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import { gridActions } from "../../../../store/grid";

const BackDrop = () => {
    return <div className={styles.backdrop}></div>
}

const ModalOverlay = (props) => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(gridActions.newGame())
    }

    return (
        <Card addStyles={styles.modal}>
            <header>
                <h2>
                &#x1F389;&#x1F389;Congrats you solved the Sudoku!&#x1F389;&#x1F389; 
                </h2>
            </header>
            {/* Section for button modes */}
            <div className={styles.controlRow}>
                <Button addStyles={styles.button} onClick={onClickHandler}>Play again?</Button>
            </div>
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