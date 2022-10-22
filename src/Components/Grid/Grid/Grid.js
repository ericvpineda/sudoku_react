import styles from "./Grid.module.css";
import { Children } from "react";
import Card from "../../UI/Card/Card";
import Cell from "../Cell/Cell";
import Row from "../Row/Row";

const Grid = (props) => {

  const fakeData = [
    '1..4.97..',
    '18.4..7..',
    '1..4.275.',
    '12.4..7..',
    '1..4..7..',
    '1..4..72.',
    '15.4..7..',
    '1.24..78.',
    '1..4..7.9',
  ]

  return (
    <Card addStyles={styles.grid}>
      {/* Note: Children.toArray() prevents children require key error  */}
      {Children.toArray([...Array(9)].map((_, row) => {
          
          return <Row>
            {Children.toArray([...Array(9)].map((_, col) => {
              console.log(row, col)
              return (
                
                <Cell>{fakeData[row][col]}</Cell>

              )

            }))}
          </Row>
        
      })
      )}
    </Card>
  );
};

export default Grid;
