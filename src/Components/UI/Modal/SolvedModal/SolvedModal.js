import Card from "../../Card/Card";
import styles from './SolvedModal.module.css'
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { gridActions } from "../../../../store/grid";

const BackDrop = () => {
    return <div className={styles.backdrop}></div>
}

const ModalOverlay = () => {
    const dispatch = useDispatch();
    const difficulty = useSelector(state => state.grid.difficulty)
    const time = useSelector(state => state.grid.time)

    const onClickHandler = () => {
        dispatch(gridActions.newGame(difficulty))
    }

    return (
        <Card addStyles={styles.modal}>
            <header>
                <h2> &#x1F389;Congrats!&#x1F389; </h2>
                <section>
                    Time:<span> {("0" + Math.floor(((time / 60000) % 600))).slice(-2)}:</span>
                    <span>{("0" + Math.floor(((time / 1000) % 60))).slice(-2)}</span>
                </section>
            </header>
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