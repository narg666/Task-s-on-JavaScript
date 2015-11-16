// Сортирует и выводит индекс второго аргумента, после вставки в отсортированный массив.

function where(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }

  return arr.length;
}

where([40, 60], 50);