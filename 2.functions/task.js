function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i< arr.length; i++) {
	  const num =arr[i];
	  if (num > max) {
		  max = num;
	  }
	  if (num < min) {
		  min = num;
	  }
          sum +=num;
  }
  const avg = (sum / arr.length).toFixed(2);
  return {
	  min: min,
	  max: max,
	  avg: Numder(avg)
  };
}
function summElementsWorker(...arr) {
    if (arr.length === 0) return 0; 
    return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0; 
    const max = Math.max(...arr); 
    const min = Math.min(...arr); 
    return max - min; 
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0; 
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (const num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num; 
        } else {
            sumOddElement += num; 
        }
    }
    return sumEvenElement - sumOddElement; 
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0; 
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (const num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num; 
            countEvenElement++; 
        }
    }

    return countEvenElement > 0 ? sumEvenElement / countEvenElement : 0; 
}
function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (const arr of arrOfArr) {
        const result = func(...arr); 
        if (result > maxWorkerResult) { 
            maxWorkerResult = result; 
        }
    }

    return maxWorkerResult; 
}