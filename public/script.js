

const findLineEquation = (point1, point2) => {
    // ax + by + c = 0
    if (!point1 || !point2) return;
    const { x1, y1 } = point1;
    const { x2, y2 } = point2;
    if (x1 === x2 && y1 === y2) return;
    if (x1 === x2) return { a: 1, b: 0, c: 0 - x1};
    if (y1 === y2) return { a: 0, b: 1, c: 0 - y1};
    const a = (y1 - y2) / (x1 - x2);
    const b = y1 - a * x1;

    return { a, b: -1, c: b };
}

// console.log(findLineEquation({ x1: 20, y1: 2 }, { x2: 2, y2: 2 }));