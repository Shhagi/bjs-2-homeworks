"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
  return arr;
  }
  else if (discriminant === 0) {
	  let root = -b / (2 *a);
	  arr.push(root);
	  return arr;
  }
  else {
	  let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
	  let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
	  arr.push(root1, root2);
	  return arr;

  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let mothlyRate = (percent / 100) / 12;
  let loanBody = amount - contribution;
  if (loanBody <= 0) {
	  return 0;
  }
  let mothlyPayment = loanBody * (mothlyRate + (mothlyRate/ (Math.pow((1 + mothlyRate), countMonths) - 1)));
  let totalPayment = mothlyPayment * countMonths;
  return Math.round(totalPayment *100) / 100;
}