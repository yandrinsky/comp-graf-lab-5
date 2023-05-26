import { visibleLineAlg } from './cube-analyzer';

export const drawEdges = ({ CNV }) => {
    const {
        frontEdge,
        leftEdge,
        rightEdge,
        backEdge,
        bottomEdge,
        topEdge,
        dot2: { x: x2, y: y2, z: z2 },
        dot1: { x: x1, y: y1, z: z1 }
    } = CNV.getState().edges;

    const [visibleLines, notVisibleLines] = visibleLineAlg(
        [frontEdge, leftEdge, rightEdge, backEdge, bottomEdge, topEdge],
        {
            x1,
            y1,
            x2,
            y2,
            z2,
            z1
        }
    );

    console.log('visibleLines', visibleLines);
    console.log('notVisibleLines', notVisibleLines);

    CNV.combineRender(() => {
        visibleLines.forEach(line => line.classList.remove('dashed'));
        notVisibleLines.forEach(line => line.classList.remove('dashed'));
        notVisibleLines.forEach(line => line.classList.add('dashed'));
    });
};
