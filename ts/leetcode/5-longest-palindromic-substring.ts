function longestPalindrome(s: string): string {
    if (s.length < 2) return s;

    let start = 0, maxLen = 1;

    function expand(l: number, r: number) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            const len = r - l + 1;

            if (len > maxLen) {
                start = l; // start становится левой границей
                maxLen = len;
            }

            l--;
            r++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i + 1);     // Проверка с четным центром
        expand(i - 1, i + 1); // Проверка с нечетным центром
    }

    return s.slice(start, start + maxLen);
}