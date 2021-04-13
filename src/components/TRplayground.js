import TextRenderer from "react-pixel-text-renderer";
import styled from "styled-components";
import TinyButton from "./TinyButton";
import Toggle from "./Toggle";

const UserText = styled.input`
    width: 100%;
    height: 30px;
    color: rgb(100, 190, 100);
    background-color: rgb(0, 30, 40);
    font-size: 1rem;
    text-align: center;
    border-width: 3px;
    border-radius: 15px;
    border-color: rgb(0,150,0) rgb(0,115,0) rgb(0,118,0) rgb(0,148,0);
    transition-property: all;
    transition-duration: 0.1s;
    margin-top: 20px;

    &:focus {
      outline: none;
      filter: brightness(1.5)
    }
`;

export default function TRplayground( { render, onClick, previewWidth, sessionDefs }) {
    if (!render) return null;
    return (
      <div className="ToggleReference Overlay">
        <Toggle />
        <div className="Container">
          <div style={{zIndex: '1', position: 'absolute', top: '10px', left: '97%'}}>
            <TinyButton color = {'rgb(200,0,0)'} shortText = {'X'} onClick = {onClick} />
          </div>
          <p className="Container__title">Text Renderer Sandbox</p>
          <TextRenderer
              customDefs = {sessionDefs}
              text = {"Coming soon, try your custom text here! Modify a selection of the Text Renderer's various props.  Animation, text, wordwrap and color."}
              charSpaces = {previewWidth < 660 ? 9 : 28}
              scale = {5}
              scaleMode = {'auto'}
              wordWrap = {true}
              animate = {false}
              // color = {[200,100,0]}
          />
          <div className ="flex-jc-aic">
            <UserText
              maxLength="100"
              type="text"
              placeholder ="Try your own text!"
            / >
            <TinyButton color = {'rgb(0,200,0)'} shortText={'✓'} text={'Apply Text'} onClick = {null} />
          </div>
        </div>
      </div>
  )
}