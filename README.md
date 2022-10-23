Working on: 
- implement buttons 
    - mode (needs overlay)
- implement all btns execpt new game from being able to be pressed when game solved (i.e. user solve, solve button)
- implement arrow key input 
- modal overlay once successfuly complete
- implement time + persistence 
- add title + fix styling
    - board higher than control buttons + num pad 
    - make control btn + num pad more transparent
    - make cell numbers larger 
    - style buttons  
- add public readme.me with summary   

Completed:
- set up files and basic UI 
- complete sudoku solver fxn
- implemented react-hook-mousetrap for keypad input 
- implement mutable vs non-mutable cells
- implement num buttons
- implented cell highlight
- implemented btns: new, solve, hint, erase
- implement keyboard listener for 'backspace' to delete cell
- 

Issues:
- Control buttons shift below when page shinks small enough


Solved:
- how to select cells with background color
    - create selectedCell property in cellSlice and use ternary statement with styles to highlight background
- previous init grid still is changeable on new grid 
    - some input cells on new grid are unchangable
- previous grid input cells and immutable cells are active when new game occurs
    - in newGame reducer, initialGrid was not set to state.initialGrid 
    - caused previous grid to be used

Future Ideas:
- Create settings page (left-hand)
- Have tests for utilites and other fxns
- navbar? 
- Leaderboard based on difficulty
- solver fxn visual
- add more randomness to board creation
- make n x n grid 
- put music in the background

Nice things to have: 
- bash file with simplified git commands

General Notes: 