import Line from '../../link-templates/Line';
import { Line as LineShape } from '../../shape-templates/Line';
import { createShape } from './createShape';

export const createLine = config => {
    let link = new Line(config);
    return createShape(link, LineShape);
};
