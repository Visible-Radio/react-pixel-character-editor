import styled from "styled-components"

const ToggleSwitch = styled.div`
  // Gauge
  background-color: rgb(10,50,50);
  width: 15%;
  height: 80%;
  position: absolute;
  border-radius: 0 50px 50px 0;
  top: 15%;
  left: 92%;
  z-index: -1;
  box-shadow: 5px 5px 5px 3px rgb(0, 20, 0, 0.3);
  transition: left, 0.3s;

  &:hover {
    cursor: pointer;
    left: 95%;
  }

  div {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  // Needle
  div div {
    width: 100%;
    height: 16px;
    background-color: rgb(255,30,0);
    z-index: -1;
    border-radius: 0 5px 5px 0;
    transform: rotate(-15deg);
    transform: ${props => props.animate ? 'rotate(-15deg)' : 'rotate(15deg)' };
    transform-origin: 0px 8px;
    transition: all 1s;
    position: absolute;
    top: ${props => props.animate ? '20%' : '80%' };
    left: 10%;
    z-index: 2;
    box-shadow: 5px 5px 5px 3px rgb(0, 20, 0, 0.3);
  }

  p {
    padding: 0;
    margin: 0 6px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing: 2px;
    color: rgb(0,190,200);
    background-color: rgb(0,0,0,0.8);
    border-radius: 0 3px 0 3px;
    font-size: 14px;
    z-index: 0;
  }

`;

export default function Toggle({ animate, toggleAnimate }){
  return (
    <ToggleSwitch animate = { animate } onClick = { toggleAnimate }>
      <div><p>ANIMATE</p><div></div></div>

    </ToggleSwitch>
  )
}