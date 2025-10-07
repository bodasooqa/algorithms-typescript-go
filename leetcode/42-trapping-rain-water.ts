function trap(height: number[]): number {
    let water = 0;

    let left = 0, right = height.length - 1;
    // leftMax и rightMax - максимальные высоты слева и справа
    let leftMax = height[left], rightMax = height[right];

    while (left < right) {
        // Всегда двигаем указатель с меньшей высотой, так как он ограничивает уровень воды
        if (height[left] < height[right]) {
            // Если текущая высота меньше максимальной слева, значит здесь может быть вода
            water += Math.max(leftMax - height[left], 0);
            // Обновляем максимальную высоту слева
            leftMax = Math.max(leftMax, height[left]);
            left++;
        } else {
            // Аналогично для правой стороны
            water += Math.max(rightMax - height[right], 0);
            rightMax = Math.max(rightMax, height[right]);
            right--;
        }
    }

    return water;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6
trap([4, 2, 0, 3, 2, 5]); // 9