import Card from "../../Card/Card";
import styles from './DifficultyModal.module.css'
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../../Button/Button";

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.resetModal}></div>
}

const ModalOverlay = (props) => {
    return (
        <Card addStyles={styles.modal}>
            <header>
                <h2>
                    Select Difficulty
                </h2>
            </header>
            {/* Section for button modes */}
            <div className={styles.buttonRow}>
                <Button>Easy</Button>
                <Button>Med</Button>
                <Button>Hard</Button>
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