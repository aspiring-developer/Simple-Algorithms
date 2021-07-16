var count = 0;
let answer = 0;
function cc(card) {
  // Only change code below this line
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;

  } else if (card === 7 || card === 8 || card === 9) {
    count = count;

  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;

  }
  if (count > 0) { answer = count + " Bet" };
  if (count <= 0) { answer = count + " Hold" };
  return answer;
  // Only change code above this line
}
console.log(cc(2)); console.log(cc(3)); console.log(cc(7)); console.log(cc('K')); console.log(cc('A'));
cc(2); cc(3); cc(7); cc('K'); cc('A');