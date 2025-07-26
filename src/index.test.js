const {getRandomIndex, getLastIndex, resetLastIndex, setLastIndex} = require('./helpers.js')


test ('check number', () => {
    const index = getRandomIndex(1);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(16)
})

describe('getRandomIndex recursion', () => { //используется для группировки связанных тестовых случаев, типа как див в HTML
  beforeEach(() => { //beforeEach - позволяет выполнить определенный код перед каждым тестом в рамках тестового файла или блока describe.
    resetLastIndex();
    jest.restoreAllMocks();
      }); - //restoreAllMocks() в Jest предназначена для сброса состояния всех моков
    // моки (mocks) – это объекты-заглушки, которые имитируют 
    // поведение реальных компонентов системы, но при этом полностью контролируются тестами. 
    // Они позволяют изолировать тестируемый код от зависимостей, упрощая тестирование и 
    // позволяя моделировать различные сценарии,
    //  в том числе и те, которые сложно воспроизвести в реальной среде


  test('calls itself recursively when number === lastIndex', () => {
    setLastIndex(5); // устанавливаем вручную lastIndex = 5

    let callCount = 0;

    jest.spyOn(Math, 'random').mockImplementation(() => { //Функция spyOn в Jest
    //  используется для отслеживания вызовов функции, предоставляя возможность проверить, 
    // сколько раз и с какими аргументами была вызвана функция
      callCount++;
      if (callCount === 1) return 5 / 16; // Math.floor = 5 (совпадение)
      else return 3 / 16;                 // Math.floor = 3 (новый индекс)
    });

    const result = getRandomIndex();

    expect(result).toBe(3);
    expect(callCount).toBe(2); // было два вызова random
    expect(getLastIndex()).toBe(3); // lastIndex обновлён
  });
});