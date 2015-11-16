// Провека нет ли в массиве значений: false, null, 0, "", undefined, NaN. И удаление их.

function bouncer(arr) {
  return arr.filter(Boolean);
}
function bouncer(arr) {
  function isTruthy(arg) {
    return Boolean(arg);
  }

  var filteredArray = arr.filter(isTruthy);
  return filteredArray;
}
bouncer([7, "ate", "", false, 9]);
