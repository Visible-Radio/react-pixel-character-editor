import Box from './Box';

export default function Grid({ handleBoxClick, def }) {
  const boxes = (() => {
    const arr = []
    for (let i = 0; i < 25; i++) {
      arr.push(null);
    }
    return arr;
  })();
  return (
    <div
      id="editorGrid"
      >
      {boxes.map((box, i) => {
        return <Box
          key = {i}
          boxIndex = {i}
          handleBoxClick = {handleBoxClick}
          state = {(() => def.includes(i) ? 'selected' : '')()}/>
      })}
    </div>
  )
}