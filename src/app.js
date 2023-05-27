import React, { useEffect } from 'react';
import './app.css';
import { useInitial } from './app.hook';
import { to2dConvertor } from './app.utils';
import { rotationAroundY, rotationAroundX } from './app.utils';
import { renderCoordinates } from './coordinates';
import { createCube } from './cube';
import { drawEdges } from './draw-edges';

export const App = () => {
    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { CNV } = useInitial();

        CNV.settings.draggableCanvasObserver = ({ preventDefault, xShift, yShift }) => {
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

        const { frontEdge, leftEdge, rightEdge, backEdge, bottomEdge, topEdge, dot2, dot1 } =
            createCube({
                startPosition,
                cubeCenter: { x: 0, y: 120, z: 0 },
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
