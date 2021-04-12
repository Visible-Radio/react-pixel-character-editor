import styled from "styled-components";

const NavButton = styled.div`
  user-select: none;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 0;
  background-color: ${props => props.color};
  overflow: hidden;
  z-index: 1;

  font-size: 0.8rem;
  color: rgba(0,0,0,0.75);
  border-width: 4px;
  border-radius: 15px;
  border-color:
  rgba(0, 60, 40, 0.1)
  rgba(0, 40, 60, 0.3)
  rgba(0, 50, 60, 0.5)
  rgba(0, 40, 60, 0.2);
  border-style: solid;
  transition-property: all;
  transition-duration: 0.1s;
  box-shadow: 3px 3px 7px 5px rgb(0,0,0,0.3), 0 0 1px 1px rgb(0,0,0,0.9);

  &:hover {
    cursor: pointer;
    width: ${props => props.text ? '140px' : '30px'};
    border-color:
    rgba(0, 60, 40, 0.2)
    rgba(0, 40, 60, 0.4)
    rgba(0, 50, 60, 0.5)
    rgba(0, 40, 60, 0.3);
  }

  &:active {
    // button click color and glow
    cursor: grabbing;
  }

  :after {
    content: "${props => props.shortText}"
  }

  &:hover:after {
    content: "${props => props.text ? props.text : props.shortText}";
  }

`;

export default function TinyButton( {color, text, shortText, onClick }) {
  return (
    <NavButton onClick = {onClick} color = {color} text = {text} shortText = {shortText}></NavButton>
  )
}