import styled from 'styled-components';

export const StyledGrid = styled.div`
  background-color: rgb(0, 55, 65);
  padding: 2px;
  width: 320px;
  height: 320px;
  border: 3px solid rgb(0, 55, 65);
  display: grid;
  grid-template-columns: repeat(${props => props.gridSize}, 1fr);
  grid-template-rows: repeat(${props => props.gridSize}, 1fr);
  justify-content: start;
  align-items: start;
  align-content: start;
  margin: 0px;
  box-shadow: 5px 5px 10px 3px rgb(0, 20, 0, 0.5);

  .box {
    height: 100%;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgb(0, 55, 65);
    background-color: rgb(0,40,50);
    /* these really dog performance on bigger grids :( */
    transition-property: color;
    transition-duration: 0.1s;
  }

  .box:hover {
    filter: brightness(1.25);
  }

  .box:active {
    border: 1px solid rgb(10, 240, 0);
    background-color: rgb(100, 255, 0);
    transform: scale(0.9);
    filter: contrast(1.5) brightness(2);
    box-shadow: 0 0 30px 15px rgba(40, 255, 0, .5);
  }

  .box.selected {
    background-color: rgb(10, 160, 0);
    border-width: 2px;
    border-color: rgba(0, 55, 65, 0.1) rgba(0, 55, 65, 0.2) rgba(0, 55, 65, 0.3) rgba(0, 55, 65, 0.1);
    border-style: solid;
  }

`;