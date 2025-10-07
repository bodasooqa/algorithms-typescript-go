function strStr(haystack: string, needle: string): number {
    // Пустая строка всегда найдена в начале
    if (!needle) return 0;

    const m = needle.length;

    for (let i = 0; i <= haystack.length - m; i++) {
        let j = 0;

        // Проверяем посимвольно
        while (j < m && haystack[i + j] === needle[j]) j++;

        // Если дошли до конца needle, значит нашли вхождение
        if (j === m) return i;
    }

    return -1;
}

strStr("hello", "ll"); // 2