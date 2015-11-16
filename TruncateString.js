// Усечение строки по второму аргументу и добавление в конце: "...".

function truncate(str, num) {
	if(num<=3){
		return str.slice(0,num)+"...";
	}
	if(str.length > num){
		return str.slice(0, num-3) + "...";
	}
		return str;
	}

truncate("A-tisket a-tasket A green and yellow basket", 11);
