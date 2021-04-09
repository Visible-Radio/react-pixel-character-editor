import styled from "styled-components";

const LaunchNukes = styled.div`
  // bib
  border: ${props => `1px solid ${props.cols[1]}`};
  background-color: ${props => props.cols[0]};
  border-radius: 10px;
  padding: 15px;
  width: min-content;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 145px;
  margin: 1px;
  box-shadow: 0 0 1px 2px rgb(0,0,0,0.3);
  user-select: none;

  div {
    background-color: rgba(30, 0, 30, 0.9);
    width: min-content;
    border-radius: ${props => props.borRad};
  }

  // bib label
  p {
    text-align: center;
    color: ${props => props.cols[3]};
    filter: hue-rotate(90deg);
    background-color: rgba(30,0,0,0.85);
    padding: 5px;
    border-radius: 2px;
    font-size: 12px;
  }

  // button
  div > div {
    // button color
    /* background-color: rgb(235,235,235); */
    background-color: ${props => props.cols[2]};
    filter: hue-rotate(-2deg);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: rgba(0,0,0,0.75);
    border-width: 6px;
    border-radius: ${props => props.borRad};
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
    box-shadow: 3px 3px 7px 5px rgb(0,0,0,0.3), 0 0 1px 1px rgb(0,0,0,0.9);;

    &:hover {
      cursor: pointer;
      transform: scale(1.15);
      border-color:
      rgba(0, 60, 40, 0.2)
      rgba(0, 40, 60, 0.4)
      rgba(0, 50, 60, 0.5)
      rgba(0, 40, 60, 0.3);
    }
    &:active {
      // button click color and glow
      background-color: ${props => props.cols[3]};
      box-shadow: ${props => `0 0 25px 5px ${props.cols[3]}`};
      cursor: grabbing;
      transform: scale(0.95);
      filter: brightness(1.25) hue-rotate(40deg);
    }
  }
`;

export default function UniversalBtn({ btnText, BtnClick, shortText, col, borRad}) {
  const colorString = (multiplier) => {
    if (col) {
      const [ r, g, b ] = col.map(channel => Math.floor(channel * multiplier));
      return `rgb(${r}, ${g}, ${b})`;
    }
    return 'rgb(100, 100, 100)';
  }
  const cols = [ colorString(0.5), colorString(0.75), colorString(1.5), colorString(2.5),]


  return (
    <div>
      <LaunchNukes
        cols = {cols}
        borRad = {borRad}
      >
      <div onClick = {BtnClick} >
        <div>{shortText}</div>
      </div>
      <p>{btnText}</p>
      </LaunchNukes>
    </div>
  )
}