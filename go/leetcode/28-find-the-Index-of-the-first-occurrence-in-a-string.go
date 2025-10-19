package main

func strStr(haystack string, needle string) int {
	m := len(needle)

	if m == 0 {
		return 0
	}

	for i := 0; i <= len(haystack) - m; i++ {
		j := 0

		for j < m {
			if haystack[i+j] != needle[j] {
				break
			}
			j++
		}

		if j == m {
			return i
		}
	}

	return -1
}
