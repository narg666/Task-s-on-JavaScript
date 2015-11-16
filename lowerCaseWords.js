// Перевод первой буквы слова в заглавную. Остальные буквы в слове остаются в нижнем регистре.

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i in str) {
    str[i] = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase());
  }
  return str.join(' ');
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");