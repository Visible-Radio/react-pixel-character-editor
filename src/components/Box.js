export default function Box({ boxIndex, handleBoxClick, state}) {

  return (
    <div className = {`box ${state}`}
      data-value = {boxIndex}
      onClick = {handleBoxClick}
      style={
        {
          minWidth: '100%',
          minHeight: '100%',
        }
        }>
    </div>
  )
}