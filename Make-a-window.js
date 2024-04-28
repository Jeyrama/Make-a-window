/*
Make me a window. 
I'll give you a number (N). 
You return a window.

Rules:
  The window will always be 2 x 2.
  The window needs to have N number of periods across 
  and N number of periods vertically in each pane.

Example:
  N = 3
  ---------
  |...|...|
  |...|...|
  |...|...|
  |---+---|
  |...|...|
  |...|...|
  |...|...|
  ---------

Note: 
  there should be no trailing new line characters at the end.
*/


// Solution

function makeAWindow(num) {
  let side = `|${'.'.repeat(num)}|${'.'.repeat(num)}|\n`.repeat(num)
  let centre = `|${'-'.repeat(num)}+${'-'.repeat(num)}|\n`
  return '-'.repeat(num * 2 + 3) + '\n' + side + centre + side + '-'.repeat(num * 2 + 3) 
}

// or

function makeAWindow(num) {
  let topAndBottom = `${"-".repeat(num * 2 + 3)}`;
  let panes = (`|${".".repeat(num)}`.repeat(2) + "|\n").repeat(num).trim();
  let center = `|${"-".repeat(num)}+${"-".repeat(num)}|`;
  return [topAndBottom, panes, center, panes, topAndBottom].join("\n");
}