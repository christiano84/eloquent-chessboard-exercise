const hashTag = "#";
const space = " ";
let finalString = "";
// Short form for 'Switch I' and 'Switch J'
let swI = false; 
let swJ = false;

// Ask user for grid size and define two "switch" variables
let cap = prompt("Enter grid size:", 8);

for (let i = 1; i <= cap; i++) {  
  for (let j = 1; j <= cap; j++) {
    // Set switches (swJ/swI)
    (i % 2 === 0) ? swI = true : swI = false;
    (j % 2 === 0) ? swJ = true : swJ = false;

    // Switches will determine hashtag vs space placements
    if (swJ && swI) finalString += space;
    else if (!swJ && !swI) finalString += space;
    else if (!swJ && swI) finalString += hashTag;
    else if (swJ && !swI) finalString += hashTag;

    // Final line. Add a new line character.
    if (j % cap === 0) finalString += "\n";
  }
}

console.log(finalString);
alert(finalString);
