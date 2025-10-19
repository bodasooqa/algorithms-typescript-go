package main

func countSubstrings(s string) int {
	n := len(s)

	if n < 2 {
		return n
	}

	count := 0

	expand := func(l, r int) {
		for l >= 0 && r < n && s[l] == s[r] {
			count++
			l--
			r++
		}
	}

	for i := range s {
		expand(i, i)
		expand(i, i+1)
	}

	return count
}
