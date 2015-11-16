// Сравнение двух массивов. И вывод нового массива с элементами, которые есть только в одном из исходных массивов.

function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}

diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);