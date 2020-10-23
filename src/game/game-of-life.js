import React, {useState, useEffect} from "react";

/*
1. Render grid
2. set life state
3. set logic

*/

const GameOfLife = () => {
  const [initCellState, setInitCellState] = useState({
    cells: []
  });
  const [fieldData, setFieldData] = useState({
    columns: 25,
    rows: 25
  });
  const [cellState, setCellState] = useState({
    Alive: true,
    Dead: false
  })

  console.log(fieldData.columns, initCellState.cells);

  useEffect(() => {
    let cells = [];
    for (let columnIndex = 0; columnIndex < fieldData.columns; columnIndex++) {
      cells[columnIndex] = [];
      for (let rowIndex = 0; rowIndex < fieldData.rows; rowIndex++) {
        cells[columnIndex][rowIndex] = cellState.Dead;
      }
    }
    return setInitCellState({cells: cells})
  }, [setInitCellState.cells])

  const renderCells = () => {
    return (
      <div className="game-cells">
        {initCellState.cells.map((rows, columnIndex) => {
          return renderCols(rows, columnIndex)
        })}
      </div>
    )
  }

  const renderCols = (rows, columnIndex) => {
    return(
      <div className="game-cols">
        {rows.map((cellState, rowIndex) => {
          return <div className="game-cell"/>
        })}
      </div>
    )
  }
  return (
    <div>
      <div>
        {renderCells()}
      </div>
      <p>GameOfLife</p>
    </div>
  )
};

export default GameOfLife
