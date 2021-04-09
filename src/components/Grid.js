import Box from './Box';
import { StyledGrid } from '../styles/StyledGrid';

export default function Grid({ handleBoxClick, def, gridSize }) {

  const gridArea = gridSize * gridSize;
  const boxes = (() => {
    const arr = []
    for (let i = 0; i < gridArea; i++) {
      arr.push(null);
    }
    return arr;
  })();

  return (
    <StyledGrid gridSize={gridSize}>
      {boxes.map((box, i) => {
        return <Box
          key = {i}
          boxIndex = {i}
          handleBoxClick = {handleBoxClick}
          state = {(() => def.includes(i) ? 'selected' : '')()}/>
      })}
    </StyledGrid>
  )
}