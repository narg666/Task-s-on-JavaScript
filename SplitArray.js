// Разбиеин массива на длину равную второму аргументу и возвращение многомерного массива.

function chunk(arr, size) {
	var newArr = [];
	for (var i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size));
	}
	return newArr;
}

chunk([0, 1, 2, 3, 4, 5], 2);