export default function Box({ boxIndex, handleBoxClick, state}) {

  return (
    <div className = {`box ${state}`}
      data-value = {boxIndex}
      onClick = {handleBoxClick}
      style={
        {
          border: '1px solid rgba(240, 130, 0)',
          minWidth: '100%',
          minHeight: '100%',
        }
        }>
    </div>
  )
}