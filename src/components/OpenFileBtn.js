export default function OpenFileBtn({ onOpenLocalFile }) {
  return (
    <input
      onChange={onOpenLocalFile}
      type="file"
      id="file-selector"
      accept=".json"
    />
  )
}