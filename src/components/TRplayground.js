import TextRenderer from "react-pixel-text-renderer";
import TinyButton from "./TinyButton";

export default function TRplayground( { render, onClick, previewWidth, sessionDefs }) {
    if (!render) return null;
    return (
      <div className="Overlay Container">
        <div style={{zIndex: '1', position: 'absolute', top: '-10px', left: '98%'}}>
          <TinyButton color = {'rgb(200,0,0)'} shortText = {'X'} onClick = {onClick} />
        </div>
        <p className="Container__title">Text Renderer Sandbox</p>
        <TextRenderer
            customDefs = {sessionDefs}
            text = {"Coming soon, try your custom text here! Modify the Text Render's various props.  Toggle animation, change colors, define wrapping behavior."}
            charSpaces = {previewWidth < 660 ? 9 : 28}
            scale = {5}
            scaleMode = {'auto'}
            wordWrap = {true}
            animate = {true}
        />
      </div>
  )
}