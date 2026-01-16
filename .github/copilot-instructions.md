# Rock-Paper-Scissors Game - AI Coding Agent Instructions

## Project Overview
A simple Rock-Paper-Scissors game implementation with vanilla JavaScript. The game tracks scores across 5 rounds and determines an overall winner. Currently uses console output and `prompt()` for I/O, with a disconnected HTML file that references a non-existent script.

## Architecture & Key Issues

### Critical Bug: Missing Return in `getHumanChoice()`
The `getHumanChoice()` function in [scripts.js](scripts.js) retrieves user input but **doesn't return it**. This causes `humanSelection` to be `undefined` throughout the game. This must be fixed for any functionality:
```javascript
function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice; // MISSING - causes game to fail
}
```

### Script Path Mismatch
[index.html](index.html#L7) references `scripts/main.js` but the actual file is `scripts.js` at the root. Update the script tag to `src="scripts.js"` or reorganize files accordingly.

## Game Logic Patterns

- **Win Conditions** ([scripts.js](scripts.js#L14-L19)): Three rock-paper-scissors comparisons with explicit `&&` chains. Very readable pattern - don't abstract unnecessarily.
- **Score Tracking**: Global `humanScore` and `computerScore` variables. Consider refactoring into an object when adding UI features.
- **Best-of-5 Format**: Fixed 5-round loop hardcoded with 5 `playRound()` calls. When adding UI, move to a round counter or game state object.

## Common Development Tasks

### Adding UI (most likely next feature)
When converting from console/prompt to HTML UI:
1. Create button event listeners for rock/paper/scissors choices
2. Update `playRound()` to return the result string instead of logging
3. Refactor to store game state in an object: `{ rounds: 0, humanScore: 0, computerScore: 0, gameOver: false }`
4. Move the final score logic into a function, not hardcoded at the bottom

### Testing Strategy
- Test `getComputerChoice()` returns only valid choices ('rock', 'paper', 'scissors')
- Test `playRound()` win/loss/tie logic with all 9 combinations
- After fixing `getHumanChoice()`, verify it processes user input correctly (case-insensitive, trim whitespace)

## Code Style Notes
- Variables declared with `let`, consistent spacing
- Functions are small and single-purpose (good baseline)
- No external dependencies or frameworks
- Avoid adding framework overhead; vanilla JS is appropriate for this scope

## File Structure to Maintain
```
Rock-Paper-Scissors/
├── index.html           (fix script path)
├── scripts.js           (fix getHumanChoice() return)
└── .github/
    └── copilot-instructions.md
```
