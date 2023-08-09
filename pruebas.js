function snail(array) {

  if(array.length == 0){
    return [];
  }

  let lastRow = array[0].length - 1;
  let lastColumn = lastRow;
  let firstRow = 0;
  let firstColumn = 0;
  let result = []
  let flag = true;

  while (flag) {
    flag = false;

    for (let i = firstColumn; i <= lastColumn; i++) {
      result.push(array[firstColumn][i]);
      flag = true;
    }

    firstRow++;

    for (let i = firstRow; i <= lastRow; i++) {
      result.push(array[i][lastColumn]);
      flag = true;
    }

    lastColumn--;

    for (let i = lastColumn; i >= firstColumn; i--) {
      result.push(array[lastRow][i]);
      flag = true;
    }

    lastRow--;

    for (let i = lastRow; i >= firstRow; i--) {
      result.push(array[i][firstColumn]);
      flag = true;
    }

    firstColumn++;

  }

  return result;
}

let matrix = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

console.log(snail([]));
