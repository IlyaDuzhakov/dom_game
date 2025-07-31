let lastIndex = -1;

//добавляем функции чтобы было удобно работать с lastIndex в тестах

//сбросить индекс до исходного

function resetLastIndex() {
  lastIndex = -1;
}

//получение индекса

function getLastIndex() {
  return lastIndex;
}
//только для тестов, позволяет задать нужное значение

function setLastIndex(value) {
  lastIndex = value;
}

// function getRandomIndex() {
//   // рекурсия
//   let number = Math.floor(Math.random() * 16);
//   if (number !== lastIndex) {
//     lastIndex = number;
//     return number;
//   } else {
//     return getRandomIndex(); // рекурсивный вызов функции - вызов функции внутри самой себя
//   }
//   // return number
// }

function getRandomIndex() {
  let number;
  do {
    number = Math.floor(Math.random() * 16);
  } while (number === lastIndex);
  {
    lastIndex = number;
    return number;
  }
}

module.exports = { getRandomIndex, resetLastIndex, getLastIndex, setLastIndex };
