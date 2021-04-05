import styled from "styled-components"

const BtnGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 6px;
  width: 320px;
  margin: 0;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
`;

export default function BtnPanel( { children }) {

  return (
    <BtnGrid>
      { children }
    </BtnGrid>
  )
}