function removeDuplicates(nums: number[]): number {
    if (!nums.length) return 0;

    let slow = 1; // Начинаем с 1, потому что 0 проверять нет смысла

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[fast - 1]) { // Если текущий элемент не равен предыдущему
            nums[slow] = nums[fast]; // Записываем его на позицию slow
            slow++; // Увеличиваем slow
        }
    }

    return slow;
}

const arr = [1, 1, 2, 2, 3, 4, 4, 4];
const removed = removeDuplicates(arr);

/**
 * На входе получаем: 1, 1, 2, 2, 3, 4, 4, 4
 * На выходе должны получить: 1, 2, 3, 4 (длина 4)
 * 
 * Цикл:
 * 1 - [1, 1, 2, 2, 3, 4, 4, 4]; fast 1; slow 1
 * 2 - [1, 2, 2, 2, 3, 4, 4, 4]; fast 2; slow 1 -> 2
 * 3 - [1, 2, 2, 2, 3, 4, 4, 4]; fast 3; slow 2
 * 4 - [1, 2, 3, 2, 3, 4, 4, 4]; fast 4; slow 2 -> 3
 * 5 - [1, 2, 3, 4, 3, 4, 4, 4]; fast 5; slow 3 -> 4
 * 6 - [1, 2, 3, 4, 3, 4, 4, 4]; fast 6; slow 4
 * 7 - [1, 2, 3, 4, 3, 4, 4, 4]; fast 7; slow 4
 * 
 * Результат: [1, 2, 3, 4, 3, 4, 4, 4] и длина (slow) = 4
 */

const result = arr.slice(0, removed);

console.log(result, removed); // [1, 2, 3, 4] 4