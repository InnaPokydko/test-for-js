document.addEventListener("DOMContentLoaded", function () {
  function findPairsWithSum(arr, target) {
    const seen = new Set();
    const arrays = [];

    for (const number of arr) {
      const i = target - number;

      if (seen.has(i) && !seen.has(number)) {
        arrays.push([number, i]);
        seen.add(number);
      }

      seen.add(number);
    }
    return arrays;
  }

  const arr = [2, 500, 90, 0, 10, 18, 40, 50, 60,25,75,0,100];
  const target = 100;

  const result = findPairsWithSum(arr, target);

  const resultContainer = document.getElementById("result");

  resultContainer.textContent = JSON.stringify(result);
});



// function findPairstWithSum(arr, target) {
//   const seen = new Set();
//   const arrays = [];

//   for (const number of arr) {
//     const i = target - number;

//     if (seen.has(i) && !seen.has(number)) {
//       arrays.push([number, i]);
//       seen.add(number);
//     }

//     seen.add(number);
//   }
//   return arrays;
// }

// const arr = [2, 7, 4, 0, 9, 5, 1, 3];
// const target = 7;

// const result = findPairstWithSum(arr, target);
// console.log(result);
