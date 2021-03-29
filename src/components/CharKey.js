export default function charKey({ onCharKeyInput, charKey, onRecordDef }) {
  return (
    <div id="charKeyContainer">
      <p style={{textAlign: 'center'}}>Enter Key for Definition</p>
      <input
        onChange={onCharKeyInput}
        id="charKey"
        type="text"
        value = {charKey}
        />
      <button onClick={onRecordDef} id="charKeyRecord">Record Def</button>
    </div>
  )
}