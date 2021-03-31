import styled from "styled-components";

const LaunchNukes = styled.div`
  div > div {

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: rgba(0,0,0,0.75);
    outline: 1px solid black;
    border-width: 6px;
    background-color: rgb(250, 150, 150);
    border-color:
      rgba(0, 60, 40, 0.1)
      rgba(0, 40, 60, 0.3)
      rgba(0, 50, 60, 0.5)
      rgba(0, 40, 60, 0.2);
    border-style: solid;
    height: 60px;
    width: 60px;
    transition-property: all;
    transition-duration: 0.1s;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      background-color: rgb(250, 10, 0);
      border-color:
      rgba(0, 60, 40, 0.2)
      rgba(0, 40, 60, 0.4)
      rgba(0, 50, 60, 0.5)
      rgba(0, 40, 60, 0.3);
    }
    &:active {
      cursor: grabbing;
      transform: scale(0.95);
      background-color: rgb(180, 10, 0);
      border-color:
      rgba(0, 50, 60, 0.7)
      rgba(0, 40, 60, 0.2)
      rgba(0, 40, 60, 0.1)
      rgba(0, 40, 60, 0.6);
    }
  }
  div {
    background-color: rgba(30, 0, 30, 0.9);
    width: min-content;
  }
  border: 1px solid rgb(150, 0, 0);
  background-color: rgba(30, 30, 30, 1);
  border-radius: 10px;
  padding: 15px;
  width: min-content;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 172px;
  margin: 1px;

  p {
    color: red;
    background-color: rgb(30,0,0);
    border: 1px solid rgb(100,0,0);
    padding: 5px;
    border-radius: 2px;
  }
`;

export default function UniversalBtn({ btnText, BtnClick, shortText }) {

  return (
    <div>
      <LaunchNukes
      onClick = {BtnClick}
      >
      <div>
        <div>{shortText}</div>
      </div>
      <p>{btnText}</p>
      </LaunchNukes>
    </div>
  )
}