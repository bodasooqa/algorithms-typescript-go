function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    // Инициализируем closestSum первой тройкой чисел
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // Если текущая сумма ближе к target, обновляем closestSum
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) closestSum = currentSum;

            if (currentSum < target) left++;
            else if (currentSum > target) right--;
            // Если текущая сумма равна target, возвращаем ее
            else return currentSum;
        }
    }

    return closestSum;
}

const arr = [-1, 2, 1, -4];
threeSumClosest(arr, 1); // 2 (-1 + 2 + 1 = 2)