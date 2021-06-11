// IF ELSE

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}
console.log(chainToSwitch(7));

//* ######################################## */

// SWITCH
function chainToSwitch1(val1) {
  var answer1 = "";
  // Only change code below this line
  switch (val1) {
    case "bob":
      answer1 = "Marley";
      break;
    case 42:
      answer1 = "The Answer";
      break;
    case 1:
      answer1 = "There is no #1";
      break;
    case 99:
      answer1 = "Missed me by this much!";
      break;
    case 7:
      answer1 = "Ate Nine";
      break;
  }
  return answer1;
}
console.log(chainToSwitch1("bob"));

//* ######################################## */
