import styled, { css } from "styled-components";

const Illuminated = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  user-select: none;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: rgba(0,0,0,0.5);
  text-transform: uppercase;

  cursor: pointer;
  border: 2px solid rgb(0, 40, 50);
  transition-property: all;
  transition-duration: 0.1s;
  background-color: rgb(0,55,65);

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    border: 1px solid rgb(10, 240, 0);
    background-color: rgb(100, 255, 0);
    transform: scale(0.9);
    filter: contrast(1.5) brightness(2);
    box-shadow: 0 0 30px 15px rgba(40, 255, 0, .5);
  }

  ${props => (props.gridWidth === props['data-value'])
    && css`
      background-color: rgb(10, 160, 0);
      border-width: 2px;
      border-color: rgba(0, 55, 65, 0.1) rgba(0, 55, 65, 0.2) rgba(0, 55, 65, 0.3) rgba(0, 55, 65, 0.1);
      border-style: solid;
      filter: contrast(1.2) brightness(1.5);
      box-shadow: 0 0 35px 15px rgba(40, 255, 0, .3);
    `
  }
`;

export default function IlluminatedButton( { values, gridWidth, handleGridWidth }) {

  return (
    <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
      {
        values.map(value => {
          return (
            <Illuminated
            key = { value }
            data-value = { value }
            gridWidth = { Number(gridWidth) }
            onClick = { handleGridWidth }
            >
              { value }
            </Illuminated>
          )
        })
      }
    </div>
  )
}