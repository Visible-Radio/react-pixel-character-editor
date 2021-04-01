import { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import CharKey from './components/CharKey';
import OpenFileBtn from './components/OpenFileBtn';
import customDefs from './customDefs.json';
import TextRenderer from 'react-pixel-text-renderer';
import UniversalBtn from './components/UniversalBtn';
import BtnPanel from './components/BtnPanel';

function App() {
  const [ def, setDef ] = useState([]);
  const [ charKey, setCharKey ] = useState('');
  const [ sessionDefs, setSessionDefs] = useState(null);
  const [ lastBoxValue, setLastBoxValue] = useState(null);

  const handleBoxClick = (event) => {
    const box = event.target;
    const boxValue = Number(box.dataset.value);

    if (!event.shiftKey) {
      setDef((def) => {
        // if the clicked on item is already in the def, return the def minus the item
        if (def.includes(boxValue)) {

          return def.filter(coordinate => coordinate !== boxValue)
        } else {
        // if the clicked on item isn't in the def, return the def plus the item

          return [...def, boxValue].sort((a,b) => a - b);
        }
      });
    }

    if (event.shiftKey) {
      const line = findBetween(lastBoxValue, boxValue);
      setDef(def => {
        // filter def, returning only items that are NOT in the line
        // ie. KEEP what's in the def already that has nothing to do with the line
        const res1 = def.filter(coordinate => !line.includes(coordinate))
        // filter line, returning only items that are NOT in the def
        // ie, if the line crosses previously clicked boxes, we're going to toggle them off
        const res2 = line.filter(coordinate => !def.includes(coordinate))

        if (!def.includes(boxValue)) {
          // if last click added an item to the def, we'll need to add that item back in upon our shift click
          return [lastBoxValue, ...res1, ...res2].sort((a,b) => a - b);
        } else if (def.includes(boxValue)) {
          // if last clicked removed an item from the def, we'll need to remove the CURRENT item upon our shift click
          return[...res1, ...res2].filter(coordinate => coordinate !== boxValue && coordinate !== lastBoxValue).sort((a,b) => a - b);
        }
      })
    }
    setLastBoxValue(boxValue);
  }

  const findBetween = (lastClick, currentClick) => {
    // some conditions:
    // current in in same row as last
    // current is in same column as last
    // current is in a different row and column, but is on a 45 degree diagonal from last
    // path between last and current is ambiguous and can't be decided without injecting an opinion

    const gridWidth = 5;
    let between = [];

    const rowOffset = (getRow(currentClick) - getRow(lastClick));
    const colOffset = (getColumn(currentClick) - getColumn(lastClick));
    const from = Math.min(lastClick, currentClick);
    const until = Math.max(lastClick, currentClick);
    const slope = (colOffset / rowOffset);

    // horizontal row
    if (rowOffset === 0) {
      for (let i = from; i < until + 1; i++ ) {
        between.push(i);
      }
    // vertical column
    } else if (colOffset === 0) {
      for (let i = from; i < until + gridWidth; i+=gridWidth ) {
        between.push(i);
      }
    // diagonal line
    } else if (Math.abs(slope) === 1) {
      for (let i = from; i < until + (gridWidth + slope); i+= (gridWidth + slope) ) {
        between.push(i);
      }
    }

    function getRow(n) {
      return Math.floor(n / gridWidth)
    }
    function getColumn(n) {
      return n % gridWidth
    }
    return between;
  }

  const onCharKeyInput = (event) => {
    // if we enter a key we've already used, display the character in the editor
    if (sessionDefs?.hasOwnProperty(event.target.value)) {
      setDef(sessionDefs[event.target.value]);
    }
    setCharKey(event.target.value);
  }

  const onRecordDef = (event) => {
    if (!charKey) return;
    // the key / value pair " ": [] is a hack to keep TextRenderer from crashing when it receives incomplete custom defs
    // internally when it doesn't recognize a character, it reaches for the space character
    // But what if the def doesn't even have the space character?! KA-BOOM!
    setSessionDefs({...sessionDefs, [charKey]: def, charWidth: 5, " ": []})
  }

  const onClear = (event) => {
    setDef([]);
    // setCharKey('')
  }

  const onSave = () => {
    console.log('sessionDefs :>> ', sessionDefs);
    // need to include the character width in the definition file
    const output = sessionDefs;
    // output.charWidth or whatever the property is = 5 or whatever
    const outputJSON = JSON.stringify(output);
    download(outputJSON, 'customDefs.json', 'text/plain');
  }

  function download(content, fileName, contentType) {
    // grabbed this guy from stack overflow
    // https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
    const a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const onLoadFile = () => {
    setSessionDefs(customDefs);
  }

  const onOpenLocalFile = (event) => {
    // opening local JSON file
    const hiddenFileInput = document.querySelector('#file-selector');
    hiddenFileInput.click();
  }

  const onHiddenFileInputClick = async (event) => {
    const file = event.target.files[0];
    const fileContents = JSON.parse(await file.text());
    console.log('fileContents :>> ', fileContents);
    setSessionDefs(fileContents);
  }

  let charSet = '';
  if (sessionDefs) {
    charSet = Object.keys(sessionDefs).join(' ');
  }

  return (
    <div className="App">
      <Grid
        handleBoxClick={handleBoxClick}
        def={def}
      />
      <BtnPanel>
        <CharKey
          onCharKeyInput = {onCharKeyInput}
          charKey = {charKey}
          onRecordDef = {onRecordDef}
        />
        <UniversalBtn btnText = {'Record Definition'} shortText = {'Record'} BtnClick = {onRecordDef} col = {[250,100,20]}/>
        <UniversalBtn btnText = {'Clear Grid'} shortText = {'Clear'} BtnClick = {onClear} col = {[200,240,20]} />
        <UniversalBtn btnText = {'Export JSON'} shortText = {'JSON'} BtnClick = {onSave} col = {[0,200,190]} borRad = {'50%'} />
        <UniversalBtn btnText = {'Load File'} shortText = {'Load'} BtnClick = {onOpenLocalFile} col = {[190,0,90]} />
        <UniversalBtn btnText = {'Stock Defs'} shortText = {'Reset'} BtnClick = {onLoadFile} col = {[0,100,190]} />
      </BtnPanel>
        <OpenFileBtn onHiddenFileInputClick = { onHiddenFileInputClick }/>
      <div className="TextRenderer">
        <p className="TextRenderer__title">Definitions in Set</p>
        <TextRenderer
          customDefs = { sessionDefs }
          text = {charSet}
          charSpaces = {26}
          scaleMode = {'auto'}
          wordWrap = {true}
        />
      </div>
    </div>
  );
}

export default App;
