import styles from "./Grid.module.css";
import { Children } from "react";
import {useSelector} from 'react-redux'
import Card from "../../UI/Card/Card";
import Cell from "../Cell/Cell";
import Row from "../Row/Row";

const Grid = (props) => {
  const gridData = useSelector(state => state.grid.grid)

  return (
    <Card addStyles={styles.grid}>
      {/* Note: Children.toArray() prevents children require key error  */}
      {Children.toArray([...Array(9)].map((_, row) => {
          
          return <Row>
            {Children.toArray([...Array(9)].map((_, col) => {
              return (
                
                <Cell>{gridData[row][col]}</Cell>

              )

            }))}
          </Row>
        
      })
      )}
    </Card>
  );
};

export default Grid;
