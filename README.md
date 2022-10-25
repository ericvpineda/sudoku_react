Working on: 
- make app faster on mobile (probably the state updates??)
- add media query to make app mobile friendly
- deploy app    
- add public readme.me with summary

Completed:
- set up files and basic UI 
- complete sudoku solver fxn
- implemented react-hook-mousetrap for keypad input 
- implement mutable vs non-mutable cells
- implement num buttons
- implented cell highlight
- implemented btns: new, solve, hint, erase, model
- implemented difficulty modal overlay
- implement keyboard listener for 'backspace' to delete cell
- implement all btns execpt new game from being able to be pressed when game solved (i.e. user solve, solve button)
    - uses overlay
- modal overlay once successfuly complete
- implement arrow key input 
- implement time + persistence 
- fix styling
    - make control btn + num pad more transparent
    - make cell numbers larger 
    - style buttons  
    - choose mode header, solve game header

Issues:

Thoughts
- Should the grid be reset if change mode to the current mode? 
- Get hint on selected cell?
- Why does board get created prior to first call to randomGrid? 
- Add a clear board 

Solved:
- how to select cells with background color
    - create selectedCell property in cellSlice and use ternary statement with styles to highlight background
- previous init grid still is changeable on new grid 
    - some input cells on new grid are unchangable
- previous grid input cells and immutable cells are active when new game occurs
    - in newGame reducer, initialGrid was not set to state.initialGrid 
    - caused previous grid to be used
- need to add a cap on how large numFilledCells inc/dec to
    - grid.js -- added state variable intFilledCells to track lower and upper bound with conditionals 
- Control buttons shift below when page shinks small enough
    - set min-width
- non-seriablizable value detected in action in path register
    - added middleware to hand redux-persist action types it dispatches 
    - https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist

Future Ideas:
- Create settings page (left-hand)
- Have tests for utilites and other fxns
- navbar? 
- Leaderboard based on difficulty
- solver fxn visual
- add more randomness to board creation
- make n x n grid 
- put music in the background
- add draw pad feature for adding nums 

Nice things to have: 
- bash file with simplified git commands

General Notes: 