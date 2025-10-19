package main

import (
	"slices"
)

func threeSum(nums []int) [][]int {
	n := len(nums)
	result := [][]int{}

	if n < 3 {
		return result
	}

	slices.Sort(nums)

	for i := 0; i < n - 2; i++ {
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i - 1] {
			continue
		}

		left, right := i + 1, n - 1

		for left < right {
			sum := nums[i] + nums[left] + nums[right]

			if (sum == 0) {
				result = append(result, []int{nums[i], nums[left], nums[right]})

				for left < right && nums[left] == nums[left + 1] {
					left++
				}
				for left < right && nums[right] == nums[right - 1] {
					right--
				}

				left++
				right--
			} else if sum < 0 {
				left++
			} else {
				right--
			}
		}
	}

	return result
}
