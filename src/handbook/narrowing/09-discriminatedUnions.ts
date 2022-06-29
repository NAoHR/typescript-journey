/**
 * more: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
 */

interface Circle {
    kind : "circle";
    radius : number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) : number {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.sideLength ** 2;
}