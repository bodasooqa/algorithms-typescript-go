package main

func longestPalindrome(s string) string {
	n := len(s)

	if n < 2 {
		return s
	}

	start, end := 0, 0

	expand := func(l, r int) (int, int) {
		for l >= 0 && r < n && s[l] == s[r] {
			l--
			r++
		}

		// Кэшируем последнее подходящее значение (шаг границ назад)
		return l + 1, r - 1
	}

	for i := range n {
		l1, r1 := expand(i, i)
		l2, r2 := expand(i, i+1)

		if r1-l1 > end-start {
			start, end = l1, r1
		}
		if r2-l2 > end-start {
			start, end = l2, r2
		}
	}

	return s[start : end+1]
}
