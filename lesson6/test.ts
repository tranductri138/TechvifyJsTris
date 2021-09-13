interface CircleConfig {
    color?: string;
    radius?: number;
    diameter?: number;
}
function createCircle(config: CircleConfig): { color: string; radius: number; diameter: number } {
    let newCircle = { color: "white", radius: 100, diameter: 1000 };
    if (config.color) {
        newCircle.color = config.color;
    }
    if (config.diameter) {
        // newCircle.diameter = 2 * config.radius;

    }
    return newCircle;
}
let circle = createCircle({ color: "black", radius: 150, diameter: 1 });
console.log("diameter: " + circle.diameter);