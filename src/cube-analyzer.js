export function visibleLineAlg(cubeFaces, cubeCoord) {
    // Координаты точки, в которой расположен наблюдатель
    const H = {
        x: 500,
        y: 500,
        z: 500 // ??
    };
    // Координаты внутреней точки

    console.log('cubeCoord', cubeCoord);
    const O = {
        x: (cubeCoord.x2 - cubeCoord.x1) / 2,
        y: (cubeCoord.y2 - cubeCoord.y1) / 2,
        z: (cubeCoord.z2 - cubeCoord.z1) / 2
    };

    // Массивы видимых и невидимых ребер
    let notVisibleLine = [];
    let visibleLine = [];

    for (let i = 0; i < 6; i++) {
        let detO = detMatrixPlane(O, cubeFaces[i]);
        let detH = detMatrixPlane(H, cubeFaces[i]);
        console.log('det ', detO, detH);

        if (detO * detH < 0) {
            // грань видна
            visibleLine.push(cubeFaces[i][0], cubeFaces[i][1], cubeFaces[i][2], cubeFaces[i][3]);
        } else {
            // грань не видна
            // for (let j = 0; j < 4; j++) {
            //     // Отсечение видимых ребер
            //     if (
            //         (cubeFaces[i][j].state.start.z < O.z && cubeFaces[i][j].state.start.z < H.z) ||
            //         (cubeFaces[i][j].state.end.z < O.z && cubeFaces[i][j].state.end.z < H.z)
            //     )
            //         notVisibleLine.push(cubeFaces[i][j]);
            // }
            // notVisibleLine.push(cubeFaces[i][0], cubeFaces[i][1], cubeFaces[i][2], cubeFaces[i][3]);
        }
    }
    return [visibleLine, notVisibleLine];
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
        x: face[1].state.end.x,
        y: face[1].state.end.y,
        z: face[1].state.end.z
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
