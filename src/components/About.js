import TinyButton from "./TinyButton";

export default function About( { render, onClick }) {
  if (!render) return null;
  return (
    <div className="Overlay Container">
      <div style={{zIndex: '1', position: 'absolute', top: '-10px', left: '98%'}}>
        <TinyButton color = {'rgb(200,0,0)'} shortText = {'X'} onClick = {onClick} />
      </div>
      <p className="Container__title">What is this thing?</p>
      <p>This is an editor for a React.js component called React Pixel Text Renderer</p>
      <p>You can get it via NPM:</p>
      <p>npm i react-pixel-text-renderer</p>
      <p>https://www.npmjs.com/package/react-pixel-text-renderer</p>
    </div>
  )
}


