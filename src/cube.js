import { to2dConvertor } from './app.utils';

export const createCube = ({ startPosition: coordsStartPosition, cubeCenter, CNV }) => {
    const size = 120;

    const startPosition = to2dConvertor({ ...cubeCenter, startPosition: coordsStartPosition });

    const dot1 = { x: cubeCenter.x - size, y: cubeCenter.y - size, z: cubeCenter.z + size };
    const dot2 = { x: cubeCenter.x + size, y: cubeCenter.y - size, z: cubeCenter.z + size };
    const dot3 = { x: cubeCenter.x + size, y: cubeCenter.y - size, z: cubeCenter.z - size };
    const dot4 = { x: cubeCenter.x - size, y: cubeCenter.y - size, z: cubeCenter.z - size };
    const dot5 = { x: cubeCenter.x - size, y: cubeCenter.y + size, z: cubeCenter.z + size };
    const dot6 = { x: cubeCenter.x + size, y: cubeCenter.y + size, z: cubeCenter.z + size };
    const dot7 = { x: cubeCenter.x + size, y: cubeCenter.y + size, z: cubeCenter.z - size };
    const dot8 = { x: cubeCenter.x - size, y: cubeCenter.y + size, z: cubeCenter.z - size };

    CNV.combineRender(() => {
        CNV.createLine({
            x0: to2dConvertor({
                ...dot1,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot1,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot2,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot2,
                startPosition
            }).y,
            id: 'cube-edge-1',
            className: 'cubeEdge',
            state: { start: { ...dot1 }, end: { ...dot2 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot2,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot2,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot6,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot6,
                startPosition
            }).y,
            id: 'cube-edge-2',
            className: 'cubeEdge',
            state: { start: { ...dot2 }, end: { ...dot6 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot6,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot6,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot5,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot5,
                startPosition
            }).y,
            id: 'cube-edge-3',
            className: 'cubeEdge',
            state: { start: { ...dot6 }, end: { ...dot5 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot5,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot5,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot1,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot1,
                startPosition
            }).y,
            id: 'cube-edge-4',
            className: 'cubeEdge',
            state: { start: { ...dot5 }, end: { ...dot1 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot2,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot2,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot3,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot3,
                startPosition
            }).y,
            id: 'cube-edge-5',
            className: 'cubeEdge',
            state: { start: { ...dot2 }, end: { ...dot3 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot3,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot3,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot7,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot7,
                startPosition
            }).y,
            id: 'cube-edge-6',
            className: 'cubeEdge',
            state: { start: { ...dot3 }, end: { ...dot7 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot7,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot7,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot6,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot6,
                startPosition
            }).y,
            id: 'cube-edge-7',
            className: 'cubeEdge',
            state: { start: { ...dot7 }, end: { ...dot6 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot3,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot3,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot4,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot4,
                startPosition
            }).y,
            id: 'cube-edge-8',
            className: 'cubeEdge',
            state: { start: { ...dot3 }, end: { ...dot4 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot4,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot4,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot8,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot8,
                startPosition
            }).y,
            id: 'cube-edge-9',
            className: 'cubeEdge',
            state: { start: { ...dot4 }, end: { ...dot8 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot8,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot8,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot7,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot7,
                startPosition
            }).y,
            id: 'cube-edge-10',
            className: 'cubeEdge',
            state: { start: { ...dot8 }, end: { ...dot7 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot4,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot4,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot1,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot1,
                startPosition
            }).y,
            id: 'cube-edge-11',
            className: 'cubeEdge',
            state: { start: { ...dot4 }, end: { ...dot1 } }
        });

        CNV.createLine({
            x0: to2dConvertor({
                ...dot8,
                startPosition
            }).x,
            y0: to2dConvertor({
                ...dot8,
                startPosition
            }).y,
            x1: to2dConvertor({
                ...dot5,
                startPosition
            }).x,
            y1: to2dConvertor({
                ...dot5,
                startPosition
            }).y,
            id: 'cube-edge-12',
            className: 'cubeEdge',
            state: { start: { ...dot8 }, end: { ...dot5 } }
        });
    });

    const frontEdge = [
        CNV.querySelector('#cube-edge-1'),
        CNV.querySelector('#cube-edge-2'),
        CNV.querySelector('#cube-edge-3'),
        CNV.querySelector('#cube-edge-4')
    ];

    const rightEdge = [
        CNV.querySelector('#cube-edge-2'),
        CNV.querySelector('#cube-edge-5'),
        CNV.querySelector('#cube-edge-6'),
        CNV.querySelector('#cube-edge-7')
    ];

    const backEdge = [
        CNV.querySelector('#cube-edge-6'),
        CNV.querySelector('#cube-edge-8'),
        CNV.querySelector('#cube-edge-9'),
        CNV.querySelector('#cube-edge-10')
    ];

    const leftEdge = [
        CNV.querySelector('#cube-edge-4'),
        CNV.querySelector('#cube-edge-9'),
        CNV.querySelector('#cube-edge-11'),
        CNV.querySelector('#cube-edge-12')
    ];

    const bottomEdge = [
        CNV.querySelector('#cube-edge-1'),
        CNV.querySelector('#cube-edge-5'),
        CNV.querySelector('#cube-edge-8'),
        CNV.querySelector('#cube-edge-11')
    ];

    const topEdge = [
        CNV.querySelector('#cube-edge-3'),
        CNV.querySelector('#cube-edge-7'),
        CNV.querySelector('#cube-edge-10'),
        CNV.querySelector('#cube-edge-12')
    ];

    return {
        frontEdge,
        backEdge,
        bottomEdge,
        topEdge,
        leftEdge,
        rightEdge,
        dot1: dot4,
        dot2: dot6
    };
};
