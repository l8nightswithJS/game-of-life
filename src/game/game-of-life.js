import React, {useState, useEffect} from "react";

/*
1. Render grid
2. set life state
3. set logic

*/

const GameOfLife = () => {
  const [initCells, setInitCells] = useState({
    cells: []
  });
  const [fieldData] = useState({
    columns: 25,
    rows: 25
  });
  const [cellState, setCellState] = useState({
    Alive: true,
    Dead: false
  })

  

  useEffect(() => {
    let cells = [];
    for (let columnIndex = 0; columnIndex < fieldData.columns; columnIndex++) {
      cells[columnIndex] = [];
      for (let rowIndex = 0; rowIndex < fieldData.rows; rowIndex++) {
        cells[columnIndex][rowIndex] = cellState.Dead;
      }
    }
    return setInitCells({cells: cells})
  }, [setInitCells.cells])

  const renderCells = () => {
    return (
      <div className="game-cells">
        {initCells.cells.map((rows, columnIndex) => {
          return renderCols(rows, columnIndex)
        })}
      </div>
    )
  }
  
  const toggleLifeDeath = (columnIndex, rowIndex) => {
    
    const newCellState = initCells.cells;

    newCellState[columnIndex][rowIndex] = !newCellState[columnIndex[rowIndex]];
    setInitCells({cells: newCellState})
    console.log(initCells.cells, columnIndex, rowIndex, cellState)
    
  }

  const renderCols = (rows, columnIndex) => {
    return(
      <div className="game-cols" key={`column_${columnIndex}`}>
        {rows.map((cellState, rowIndex) => {
          const cellModifier = cellState === cellState.Dead ? "dead" : "alive";
          return <div className={`game-cell game-cell--${cellModifier}`} key={`${columnIndex}_${rowIndex}`} onClick={() => toggleLifeDeath(columnIndex, rowIndex)} />
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
