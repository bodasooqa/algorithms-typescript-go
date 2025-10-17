function sortedSquares(nums: number[]): number[] {
    const n = nums.length;

    const result: number[] = new Array(n);

    /**
     * pos - позиция для вставки следующего квадрата
     * вставляем с конца, так как квадраты отрицательных чисел 
     * могут быть больше квадратов положительных
     */
    let left = 0, right = n - 1, pos = n - 1;

    while (left <= right) {
        const leftVal = Math.abs(nums[left]), rightVal = Math.abs(nums[right]);

        // Если модуль левого больше, вставляем его квадрат, иначе правого
        if (leftVal > rightVal) {
            result[pos] = leftVal ** 2;
            left++;
        } else {
            result[pos] = rightVal ** 2;
            right--;
        }

        // Сдвигаем позицию вставки
        pos--;
    }

    return result;
}