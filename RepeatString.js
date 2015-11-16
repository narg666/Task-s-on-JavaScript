// Вернуть строку, которая повторяет первую n-раз. N берется из второй строки на входе.

function repeat(str, num) {
    var accumulatedStr = "";
    while (num > 0) {
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
}

repeat("*", 3);