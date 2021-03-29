# React-Pixel-Character-Editor

A GUI for creating and modifying character definitions for the react-pixel-text-renderer.

### How to:
  * Create a definition in the grid.  A single click will toggle a square on and off.  A click followed by a shift-click will toggle all squares in the line between the two clicks.

  * Enter a character in the text input to associate with the definition.

  * Click Record Def.  The definition has now been appened to the definitions object.

  * Click Save Defs to File.  The custom definitions will be downloaded as a JSON file.

  * This file will be able to be used with the react-pixel-text-renderer instead of using it's included definitions.

### Use with React-Pixel-Text-Renderer:

  * Place the customDefs.json file in the folder for your app that uses the react-pixel-text-renderer.

  * In your app import like this: 
  ```javascript 
  import customDefs from './customDefs.json';
  ```

  * Pass the custom defs to the component as a prop:
  ```jsx
  <TextRenderer
    customDefs = {customDefs}
    bgColor = {'rgba(0,10,50,1)'}
    color = {[230, 0, 190]}
    text={"it's good it's bad it's ugly it's a pixel text renderer."}
    scale={20}
    charSpaces={8}
    animate={true}
  />
 ```

### What's next for the Character Editor?
  * Some additional work is required in order to load your own JSON definition files, rather than just a stock starter set hard coded into the app.

### What's next for react-pixel-text-renderer?
  * I've been thinking about implementing support for different sizes of character definition grids.
  * Currently chars are defined in a 5 x 5 grid.  I'd like to Implement the ability to define characters on larger grids.
  * This would enable proper support for upper and lower case characters and characters that can't be legibly defined with only 25 squares.  
  * After wokring through that, another challenge would be to define the grid size on a per character basis rather than on a character set basis.  This would complicate the calculations for when to jump to a new line.

