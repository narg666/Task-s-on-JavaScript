// Вычисление факториала числа.

function factorialize(num) {
  return num ? num * factorialize(num - 1) : 1;
}

factorialize(20);
