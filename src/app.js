import React, { useEffect } from 'react';
import './app.css';
import { useInitial } from './app.hook';
import { convertZtoXY, to2dConvertor } from './app.utils';
import { rotationAroundY, rotationAroundX } from './app.utils';
import { renderCoordinates } from './coordinates';
import { createCube } from './cube';
import { drawEdges } from './draw-edges';

export const App = () => {
    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { CNV } = useInitial();

        CNV.settings.draggableCanvasObserver = ({ preventDefault, xShift, yShift }) => {
            // CNV.getState().xShift = (CNV.getState().xShift + xShift) % 360;
            // CNV.getState().yShift = (CNV.getState().yShift + yShift) % 360;
            //
            // CNV.combineRender(() => {
            //     CNV.querySelector('#canvasShiftText')?.remove();
            //
            //     CNV.querySelector('#xRotate').link.updateText(`x angle: ${CNV.getState().xShift}`);
            //
            //     CNV.querySelector('#yRotate').link.updateText(`y angle: ${CNV.getState().yShift}`);
            // });

            CNV.combineRender(() => {
                CNV.querySelectorAll('.cubeEdge').forEach(line => {
                    const updatedByXAngleCoords = rotationAroundX({
                        x: [line.state.start.x, line.state.end.x],
                        y: [line.state.start.y, line.state.end.y],
                        z: [line.state.start.z, line.state.end.z],
                        angle: yShift
                    });

                    const updatedByYAngleCoords = rotationAroundY({
                        x: updatedByXAngleCoords.x,
                        y: updatedByXAngleCoords.y,
                        z: updatedByXAngleCoords.z,
                        angle: -xShift
                    });

                    line.state.start.x = updatedByYAngleCoords.x[0];
                    line.state.start.y = updatedByYAngleCoords.y[0];
                    line.state.start.z = updatedByYAngleCoords.z[0];

                    line.state.end.x = updatedByYAngleCoords.x[1];
                    line.state.end.y = updatedByYAngleCoords.y[1];
                    line.state.end.z = updatedByYAngleCoords.z[1];

                    line.update.start.x = to2dConvertor({
                        ...line.state.start,
                        startPosition
                    }).x;

                    line.update.start.y = to2dConvertor({
                        ...line.state.start,
                        startPosition
                    }).y;

                    line.update.end.x = to2dConvertor({
                        ...line.state.end,
                        startPosition
                    }).x;

                    line.update.end.y = to2dConvertor({
                        ...line.state.end,
                        startPosition
                    }).y;
                });

                drawEdges({ CNV });
            });

            preventDefault();
        };

        const startPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        CNV.createCircle({
            x0: startPosition.x,
            y0: startPosition.y,
            className: 'red'
        });

        renderCoordinates({ CNV });

        const createCoordsCell = ({ startPosition, dotCoords: dotCoordsWithoutAngle }) => {
            const updatedByXAngleCoords = rotationAroundX({
                x: [dotCoordsWithoutAngle.x],
                y: [dotCoordsWithoutAngle.y],
                z: [dotCoordsWithoutAngle.z],
                angle: CNV.getState().xShift
            });

            const updatedByYAngleCoords = rotationAroundY({
                x: updatedByXAngleCoords.x,
                y: updatedByXAngleCoords.y,
                z: updatedByXAngleCoords.z,
                angle: CNV.getState().yShift
            });

            const dotCoords = {
                x: updatedByYAngleCoords.x[0],
                y: updatedByYAngleCoords.y[0],
                z: updatedByYAngleCoords.z[0]
            };

            const zCoords = convertZtoXY({ z: dotCoords.z, startPosition: startPosition });

            CNV.combineRender(() => {
                CNV.querySelectorAll('.coordsCellLine').forEach(el => el.remove());
            });

            CNV.combineRender(() => {
                CNV.createLine({
                    x0: startPosition.x,
                    y0: startPosition.y - dotCoords.y,
                    x1: startPosition.x + dotCoords.x,
                    y1: startPosition.y - dotCoords.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: startPosition.x + dotCoords.x,
                    y0: startPosition.y - dotCoords.y,
                    x1: startPosition.x + dotCoords.x,
                    y1: startPosition.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: zCoords.x,
                    y0: zCoords.y,
                    x1: zCoords.x + dotCoords.x,
                    y1: zCoords.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: zCoords.x + dotCoords.x,
                    y0: zCoords.y,
                    x1: startPosition.x + dotCoords.x,
                    y1: startPosition.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: zCoords.x + dotCoords.x,
                    y0: zCoords.y,
                    x1: zCoords.x + dotCoords.x,
                    y1: zCoords.y - dotCoords.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: zCoords.x + dotCoords.x,
                    y0: zCoords.y - dotCoords.y,
                    x1: zCoords.x,
                    y1: zCoords.y - dotCoords.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: zCoords.x,
                    y0: zCoords.y - dotCoords.y,
                    x1: zCoords.x,
                    y1: zCoords.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: startPosition.x,
                    y0: startPosition.y,
                    x1: zCoords.x,
                    y1: zCoords.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: zCoords.x,
                    y0: zCoords.y - dotCoords.y,
                    x1: startPosition.x,
                    y1: startPosition.y - dotCoords.y,
                    className: ['coordsCellLine']
                });

                CNV.createLine({
                    x0: startPosition.x,
                    y0: startPosition.y,
                    x1: startPosition.x,
                    y1: startPosition.y - dotCoords.y,
                    className: ['coordsCellLine']
                });

                CNV.createLine({
                    x0: zCoords.x + dotCoords.x,
                    y0: zCoords.y - dotCoords.y,
                    x1: startPosition.x + dotCoords.x,
                    y1: startPosition.y - dotCoords.y,
                    className: 'coordsCellLine'
                });

                CNV.createLine({
                    x0: startPosition.x,
                    y0: startPosition.y,
                    x1: startPosition.x + dotCoords.x,
                    y1: startPosition.y,
                    className: 'coordsCellLine'
                });
            });
        };

        const { frontEdge, leftEdge, rightEdge, backEdge, bottomEdge, topEdge, dot2, dot1 } =
            createCube({
                startPosition,
                cubeCenter: { x: 0, y: 0, z: 0 },
                CNV
            });

        CNV.getState().edges = {
            frontEdge,
            leftEdge,
            rightEdge,
            backEdge,
            bottomEdge,
            topEdge,
            dot2,
            dot1
        };

        drawEdges({ CNV });
    }, []);

    return (
        <div>
            <canvas id="canvas" width={window.innerWidth} height={window.innerHeight} />
        </div>
    );
};
