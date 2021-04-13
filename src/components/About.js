import TinyButton from "./TinyButton";

export default function About( { render, onClick }) {
  if (!render) return null;
  return (
    <div className="Overlay Container bs mh300">
      <div style={{zIndex: '1', position: 'absolute', top: '-20px', right: '-23px'}}>
        <TinyButton color = {'rgb(200,0,0)'} shortText = {'X'} onClick = {onClick} />
      </div>
      <p className="Container__title">What is this thing?</p>
      <h3>Huh?</h3>
      <p>This is an editor for a React.js component called React Pixel Text Renderer. It renders strings of characters onto a canvas element. Each character is defined by an array of indexes into a grid. The component comes with some built in definitions, but the editor can be used to create custom character sets.</p>
      <h3>How to:</h3>
      <p>Enter the character you'd like to define in the definition key input. Draw the character in the grid by clicking and shift-clicking to toggle the squares. Click record to store the character definition. Click the JSON button to save your custom definitions to file. The reset button will restore the built-in stock definitions, which are built on a 5 x 5 grid.
      </p>
      <h3>Get it!</h3>
      <p>Install via NPM:</p>
      <p><span>npm i react-pixel-text-renderer</span></p>
      <div className="flex-jc-aic">
        <p><a href="https://github.com/Visible-Radio/react-pixel-text-renderer">Renderer Documentation & Repo</a></p>
        <p><a href="https://github.com/Visible-Radio/react-pixel-character-editor">Editor Documentation & Repo</a></p>
        <p><a href="https://www.npmjs.com/package/react-pixel-text-renderer">NPM</a></p>
      </div>

    </div>
  )
}


