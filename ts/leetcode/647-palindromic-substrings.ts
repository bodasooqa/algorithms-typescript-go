function countSubstrings(s: string): number {
    const n = s.length;

    if (n < 2) return n;

    let count = 0;

    const expandAroundCenter = (left: number, right: number) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    };

    for (let i = 0; i < n; i++) {
        // Odd length palindromes
        expandAroundCenter(i, i);
        // Even length palindromes
        expandAroundCenter(i, i + 1);
    }

    return count;
}