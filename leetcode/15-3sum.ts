function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b); // сортировка от наименьшего к наибольшему

    const result: number[][] = [];

    // nums.length - 2, т.к. нужно минимум 3 числа для суммы 0
    for (let i = 0; i < nums.length - 2; i++) {
        // Если текущий элемент больше 0, то дальше искать не имеет смысла
        if (nums[i] > 0) break;
        // Пропускаем дубликаты
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1; // следующий элемент после i
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Пропускаем дубликаты
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Сдвигаем оба указателя
                left++;
                right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }

    return result;
};

const arr = [1, 2, -1, 0, 3, -2, 1];

/**
 * Сортированный массив: [-2, -1, 0, 1, 1, 2, 3]
 *                         i   j              k
 * Берем элемент i, нужно найти j и k, которые в сумме
 * будут давать -i. Если сумма меньше - j++, если
 * больше - k--
 * 
 * j(-1) + k(3) === -i(2) = 2
 * result -> [[-2, -1, 3]]
 * j++
 * 
 * j(0) + k(3) !== -i(2) = 3
 * k--
 * 
 * j(0) + k(2) === -i(2) = 2
 * result -> [[-2, -1, 3], [-2, 0, 2]]
 * j++
 * 
 * j(1) + k(2) !== -i(2) = 3
 * k--
 * 
 * j(1) + k(1) === -i(2) = 2
 * result -> [[-2, -1, 3], [-2, 0, 2], [-2, 1, 1]]
 * j++
 * j === k
 * i++
 * 
 * j(0) + k(3) !== -i(1) = 3
 * k--
 * 
 * j(0) + k(2) !== -i(1) = 2
 * k--
 * 
 * j(0) + k(1) === -i(1) = 1
 * result -> [
 *     [-2, -1, 3], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
 * ]
 * j++
 * 
 * j(1) + k(1) !== -i(1) = 2
 * k--;
 * j === k
 * i++
 * 
 * j(1) + k(3) !== -i(0) = 4
 * k--;
 * ...
 * j === k
 * i++
 * 
 * nums[i] > 0 -> exit
 * 
 * result = [
 *     [-2, -1, 3], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
 * ] 
 */

threeSum(arr);