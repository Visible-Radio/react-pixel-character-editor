import styled from "styled-components"

const CharInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: rgb(100, 190, 100);
  width: 95px;
  height: 145px;
  border: 1px solid rgba(40,90,50,0.5);
  border-radius: 10px;
  background-color: rgb(30,100,70);
  margin: 1px;
  box-shadow: 0 0 1px 2px rgb(0,0,0,0.3);

  input {
    width: 85px;
    height: 85px;
    color: rgb(100, 190, 100);
    background-color: rgb(0, 30, 40);
    font-size: 65px;
    text-align: center;
    border-width: 3px;
    border-radius: 15px;
    border-color: rgb(0,110,0) rgb(0,115,0) rgb(0,118,0) rgb(0,118,0);
    transition-property: all;
    transition-duration: 0.1s;

    &:focus {
      outline: none;
      filter: brightness(1.5)
    }
  }

  p {
    width: min-content;
    background-color: rgba(0,0,30,0.85);
    color: rgb(100, 220, 200);
    padding: 5px;
    border-radius: 2px;
    margin: 0;
    font-size: 12px;
  }

`;

export default function charKey({ onCharKeyInput, charKey }) {

  return (
    <CharInput>
      <p style={{textAlign: 'center'}}>Definition Key</p>
      <input
        maxLength="1"
        onChange={onCharKeyInput}
        id="charKey"
        type="text"
        value = {charKey}
      >
      </input>
    </CharInput>
  )
}