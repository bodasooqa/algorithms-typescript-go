function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1, ans = 0;

    while (left < right) {
        // Считаем площадь, обновляем максимум
        const area = Math.min(height[left], height[right]) * (right - left);
        ans = Math.max(ans, area);

        // Двигаем указатель, который указывает на меньшую высоту
        if (height[left] < height[right]) left++;
        else right--;
    }

    return ans;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2
