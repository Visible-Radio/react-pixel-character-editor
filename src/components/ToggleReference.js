import styled from "styled-components";

/*
componentized container with a lever on the side.

      <ToggleReference>
        <Toggle toggleAnimate = { toggleAnimate } animate = { animate } />
        <div className="Container">
        <p className="Container__title">Definitions in Set</p>
          <p>well hey there</p>
        </div>
      </ToggleReference>
*/

const Reference = styled.div`
  position: relative;
  z-index: 0;
`;

export default function ToggleReference( { children } ) {
  return (
    <Reference>
      { children }
    </Reference>
  )
}