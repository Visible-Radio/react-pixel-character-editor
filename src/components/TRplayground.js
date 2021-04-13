import { useState } from "react";
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
    border-radius: 5px;
    border-color: rgb(0,150,0) rgb(0,115,0) rgb(0,118,0) rgb(0,148,0);
    transition-property: all;
    transition-duration: 0.1s;
    margin-top: 15px;
    margin-bottom: 10px;

    &:focus {
      outline: none;
      filter: brightness(1.5)
    }
`;

export default function TRplayground( { onClick, previewWidth, sessionDefs }) {
  const defaultText = 'Try Your Own Text Here';
  const empty = ''
  const [ textInputState, setTextInputState] = useState(defaultText);
  const [ animate, setAnimate] = useState(false);
  const maxCharSpaces = previewWidth < 660 ? 9 : 20;
 const textProp = textInputState.length ? textInputState : defaultText;

  const onInputChange = (event) => {
    setTextInputState(event.target.value);
  }

  const toggleAnimate = () => {
    setAnimate(!animate);
  }

  const onReset = () => {
    setAnimate(false);
    setTextInputState(empty);
  }

  return (
    <div className="Overlay ToggleReference">
      <Toggle animate={animate} toggleAnimate={toggleAnimate} />
      <div className="Container bs mh300">
        <div style={{zIndex: '1', position: 'absolute', top: '10px', right: '-17px'}}>
          <TinyButton color = {'rgb(200,0,0)'} shortText = {'X'} onClick = {onClick} />
        </div>
        <p className="Container__title">Text Renderer Sandbox</p>
        <TextRenderer
            customDefs = {sessionDefs}
            text = {textInputState || defaultText}
            charSpaces = {textProp.length < maxCharSpaces ? textProp.length : maxCharSpaces}
            scale = {5}
            scaleMode = {'auto'}
            wordWrap = {true}
            animate = {animate}
        />
        <div className="flex-jc-aic w100">
          <UserText
            maxLength="100"
            type="text"
            onChange = {onInputChange}
            value = {textInputState}
          / >
          <TinyButton color = {'rgb(0,200,0)'} shortText = {'C'} text = {'Clear'} onClick = {onReset} />
        </div>
      </div>
    </div>
  )
}