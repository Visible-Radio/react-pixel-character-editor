export default function Box({ boxIndex, handleBoxClick, state}) {

  return (
    <div className = {`box ${state}`}
      data-value = {boxIndex}
      onClick = {handleBoxClick}
    >
    </div>
  )
}