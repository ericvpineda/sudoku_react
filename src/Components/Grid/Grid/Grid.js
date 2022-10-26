import styles from "./Grid.module.css";
import Card from "../../UI/Card/Card";
import Cell from "../Cell/Cell";
import Row from "../Row/Row";
import DifficultyModal from "../../UI/Modal/DifficultyModal/DifficultyModal";
import SolvedModal from "../../UI/Modal/SolvedModal/SolvedModal";
import { useSelector, useDispatch,} from "react-redux";
import { Children, Fragment, useEffect } from "react";
import { gridActions } from "../../../store/grid";
import { randomGrid } from "../../../utils/utils";

const Grid = () => {
  const dispatch = useDispatch();
  const workingGrid = useSelector(state => state.grid.workingGrid);
  const difficultyModal = useSelector(state => state.grid.difficultyModalActive);
  const isSolved = useSelector(state => state.grid.isSolved);
  const time = useSelector(state => state.grid.time);
  const difficulty = useSelector(state => state.grid.difficulty)

  // Note: Creates initial board
  useEffect(() => {
    if (!isSolved && time === 0) {
      const startGridLogistics = randomGrid(difficulty);
      dispatch(gridActions.newGame(startGridLogistics))
    }    
  }, [isSolved, dispatch, time, difficulty])

  const resetModalHandler = () => {
    dispatch(gridActions.activateDifficultyModal(false));
  };

  return (
    <Fragment>
      {difficultyModal && (
        <DifficultyModal onConfirm={resetModalHandler}></DifficultyModal>
      )}
      {isSolved && <SolvedModal></SolvedModal>}

      <Card addStyles={styles.grid}>
        {/* Note: Children.toArray() prevents children require key error  */}
        {Children.toArray(
          [...Array(9)].map((_, row) => {
            return (
              <Row>
                {Children.toArray(
                  [...Array(9)].map((_, col) => {
                    return (
                      <Cell row={row} col={col}>
                        {workingGrid[row][col]}
                      </Cell>
                    );
                  })
                )}
              </Row>
            );
          })
        )}
      </Card>
    </Fragment>
  );
};

export default Grid;
