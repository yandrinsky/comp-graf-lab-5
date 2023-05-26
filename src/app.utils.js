import { getSign } from './CNV_lib/Engine/utils/get-sign';

export const to2dConvertor = ({ x, y, z, startPosition = { x: 0, y: 0 } }) => {
    const zCoord = Math.sqrt(z ** 2 / 2) * getSign(z);
    const baseX = -zCoord;
    const baseY = zCoord;

    const xCoord = baseX + x;
    const yCoord = baseY - y;

    return { x: xCoord + startPosition.x, y: yCoord + startPosition.y };
};

export const convertZtoXY = ({ z, startPosition = { x: 0, y: 0 } }) => {
    const zCoord = Math.sqrt(z ** 2 / 2) * getSign(z);
    return { x: -zCoord + startPosition.x, y: zCoord + startPosition.y };
};

// Считает координаты заданных точек при повороте на angle
export const rotationAroundX = ({ x: Px, y: Py, z: Pz, angle }) => {
    let newPx = new Array(4);
    let newPy = new Array(4);
    let newPz = new Array(4);

    for (let i = 0; i < 4; i++) {
        newPx[i] = Px[i];
        newPy[i] =
            Py[i] * Math.cos((angle * Math.PI) / 180) + Pz[i] * Math.sin((angle * Math.PI) / 180);
        newPz[i] =
            -Py[i] * Math.sin((angle * Math.PI) / 180) + Pz[i] * Math.cos((angle * Math.PI) / 180);
    }

    return {
        x: newPx,
        y: newPy,
        z: newPz
    };
};

export const rotationAroundY = ({ x: Px, y: Py, z: Pz, angle }) => {
    let newPx = new Array(4);
    let newPy = new Array(4);
    let newPz = new Array(4);

    for (let i = 0; i < 4; i++) {
        newPx[i] =
            Px[i] * Math.cos((angle * Math.PI) / 180) + Pz[i] * Math.sin((angle * Math.PI) / 180);
        newPy[i] = Py[i];
        newPz[i] =
            -Px[i] * Math.sin((angle * Math.PI) / 180) + Pz[i] * Math.cos((angle * Math.PI) / 180);
    }

    return {
        x: newPx,
        y: newPy,
        z: newPz
    };
};
