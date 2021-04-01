export default function OpenFileBtn({ onHiddenFileInputClick }) {
  return (
    <input
      style={{display: 'none'}}
      onChange={onHiddenFileInputClick}
      type="file"
      id="file-selector"
      accept=".json"
    />
  )
}