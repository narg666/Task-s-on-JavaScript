// Проверка, находится ли в конце первого аргумента (строки) - второй (строка).

function end(str, target) {
	if(str.substr((str.length - target.length ),(str.length)) == target){
		return true;
	} else {
		return false;
	}
}

end('Bastian', 'n');