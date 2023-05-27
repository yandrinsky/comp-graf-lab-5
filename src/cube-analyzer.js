export function visibleLineAlg(cubeFaces) {
    let cubeCoord = {
        x1: cubeFaces[3][2].state.start.x,
        y1: cubeFaces[3][2].state.start.y,
        z1: cubeFaces[3][2].state.start.z,
        x2: cubeFaces[0][2].state.start.x,
        y2: cubeFaces[0][2].state.start.y,
        z2: cubeFaces[0][2].state.start.z
    };

    // Координаты точки, в которой расположен наблюдатель
    const H = {
        x: 1000,
        y: 1000,
        z: 1000
    };

    // Координаты внутреней точки
    const O = {
        x: (cubeCoord.x2 + cubeCoord.x1) / 2,
        y: (cubeCoord.y2 + cubeCoord.y1) / 2,
        z: (cubeCoord.z2 + cubeCoord.z1) / 2
    };

    // Массивы видимых и невидимых ребер
    let notVisibleLine = new Set();
    let visibleLine = new Set();

    for (let i = 0; i < 6; i++) {
        let detO = detMatrixPlane(O, cubeFaces[i]);
        let detH = detMatrixPlane(H, cubeFaces[i]);

        if (detO * detH < 0) {
            // грань видна
            visibleLine.add(cubeFaces[i][0]);
            visibleLine.add(cubeFaces[i][1]);
            visibleLine.add(cubeFaces[i][2]);
            visibleLine.add(cubeFaces[i][3]);
        } else {
            notVisibleLine.add(cubeFaces[i][0]);
            notVisibleLine.add(cubeFaces[i][1]);
            notVisibleLine.add(cubeFaces[i][2]);
            notVisibleLine.add(cubeFaces[i][3]);
        }
    }

    let uniqVisLine = Array.from(visibleLine);
    let uniqNotVisLine = Array.from(notVisibleLine).filter(x => !uniqVisLine.includes(x));

    return [uniqVisLine, uniqNotVisLine];
}

// Вычисление определителя матричного уравнения плоскости,
// определяемого тремя принадлежащими грани точками
function detMatrixPlane(dot, face) {
    // ?? проверить dot3 (!= dot1, != dot2)
    let dot1 = {
        x: face[0].state.start.x,
        y: face[0].state.start.y,
        z: face[0].state.start.z
    };
    let dot2 = {
        x: face[0].state.end.x,
        y: face[0].state.end.y,
        z: face[0].state.end.z
    };
    let dot3 = {
        x: face[3].state.start.x,
        y: face[3].state.start.y,
        z: face[3].state.start.z
    };

    let det =
        (dot.x - dot1.x) * (dot2.y - dot1.y) * (dot3.z - dot1.z) +
        (dot.y - dot1.y) * (dot2.z - dot1.z) * (dot3.x - dot1.x) +
        (dot.z - dot1.z) * (dot2.x - dot1.x) * (dot3.y - dot1.y) -
        (dot.z - dot1.z) * (dot2.y - dot1.y) * (dot3.x - dot1.x) -
        (dot.x - dot1.x) * (dot2.z - dot1.z) * (dot3.y - dot1.y) -
        (dot.y - dot1.y) * (dot2.x - dot1.x) * (dot3.z - dot1.z);
    return det;
}
