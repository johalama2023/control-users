// Instrucciones
// Dado el arreglo numbers, vas a retornar un arreglo con los dos primeros números de numbers que al sumarlos resulten en el entero n.

// Ejemplos
// numbers = [1, 4, 8, 7, 3, 15]
// n = 8
// la función debe retornar [1, 7]

// Importante: estos pares deben ser lo más próximos posibles entre sí. Por ejemplo, si

// numbers = [10, 5, 2, 3, 7, 5]
// n = 10
// la función podría retornar [5, 5]

//     [10, 5, 2, 3, 7, 5]

// o [3, 7]

//      [10, 5, 2, 3, 7, 5]
// Pero en este caso nos quedaremos con [3, 7], ya que estos pares están mas cerca que [5 y 5].

// Si hay dos pares con la misma distancia entre sí, se debe tomar al primero. Por ejemplo, si
// numbers = [1, 2, 3, 4, 1, 0]
// n = 2
// la función podría retornar [1, 1]
//     [1, 2, 3, 4, 1, 0]

// o [2, 0]

//      [1, 2, 3, 4, 1, 0]

// Pero en este caso nos quedaremos con [1, 1], ya que estos pares están antes que [2, 0].

// Finalmente, si no hay ningún par en el arreglo que cumpla con la suma, la función debe retornar undefined
// numbers = [3, 7, 2, 4]
// n = 8
// Ejemplos
// sumPairs([1, 4, 8, 7, 3, 15], 8);
// Debe retornar [1, 7]

// sumPairs([10, 5, 2, 3, 7, 5], 10);
// Debe retornar [3, 7]

// sumPairs([9, 9, 3, 4, 6], 5);

const sumPairs = (numbers, n) => {
    let result = [];
    let distance = numbers.length;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === n) {
            if (j - i < distance) {
            distance = j - i;
            result = [numbers[i], numbers[j]];
            }
        }
        }
    }
    return result.length > 0 ? result : undefined;
}

// const sumPairs = (numbers, n) => {
//   for (let separator = 1; separator < numbers.length; separator++) {
//     for (let i = 0; i < numbers.length - separator; i++) {
//       const sum = numbers[i] + numbers[i + separator];
//       if (sum === n) {
//         return [numbers[i], numbers[i + separator]];
//       }
//     }
//   }
// };
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([9, 9, 3, 4, 6], 5));
