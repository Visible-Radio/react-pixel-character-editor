export default function ConditionalRender( { children, render }) {
  if (!render) return null;
  return (
    [ children ]
  )
}