export default function charKey({ onCharKeyInput, charKey, onRecordDef, children }) {
  return (
    <div id="charKeyContainer">
      <p style={{textAlign: 'center'}}>Enter Key for Definition</p>
      <input
        maxLength="1"
        onChange={onCharKeyInput}
        id="charKey"
        type="text"
        value = {charKey}
        />
      {/* <button onClick={onRecordDef} id="charKeyRecord">Record Def</button> */}
      {/* { children } */}
    </div>
  )
}