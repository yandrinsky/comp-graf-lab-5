import { getEquationFrom2Points } from '../Engine/geometry/line/get-equation-from-2-points';
import { getCoordinates, length, moveTo } from '../Engine/geometry/geometry';
import { render } from '../Engine/render';
import { ShapeWithHandles } from './Shape-with-handles';

export class Line extends ShapeWithHandles {
    constructor(link) {
        super(link);
        this.isPointer = false;
    }

    get length() {
        return length(this.equation);
    }

    get system() {
        const __this = this;

        return {
            getEquation() {
                let eq = getEquationFrom2Points(
                    __this.link.start.x,
                    __this.link.start.y,
                    __this.link.end.x,
                    __this.link.end.y
                );

                eq.x3 = __this.link.check.x;
                eq.y3 = __this.link.check.y;
                eq.target = __this;

                return eq;
            },

            getCoordinatesX(y) {
                return getCoordinates(this.equation, undefined, y);
            },

            getCoordinatesY(x) {
                return getCoordinates(this.equation, x, undefined);
            },

            moveTo(move, x) {
                return moveTo(this.equation, move, x);
            },

            getID() {
                return __this.id;
            }
        };
    }

    get update() {
        const link = this.link;

        return {
            get check() {
                return {
                    set x(x) {
                        link.check.x = x;
                        render();
                    },
                    set y(y) {
                        link.check.y = y;
                        render();
                    }
                };
            },

            get start() {
                return {
                    set x(x) {
                        link.start.x = x;
                        render();
                    },
                    set y(y) {
                        link.start.y = y;
                        render();
                    },

                    get x() {
                        return link.start.x;
                    },

                    get y() {
                        return link.start.y;
                    }
                };
            },

            get startPosition() {
                return {
                    set x(x) {
                        link.start.x = x;
                        render();
                    },
                    set y(y) {
                        link.start.y = y;
                        render();
                    },

                    get x() {
                        return link.start.x;
                    },

                    get y() {
                        return link.start.y;
                    }
                };
            },

            get end() {
                return {
                    set x(x) {
                        link.end.x = x;
                        render();
                    },
                    set y(y) {
                        link.end.y = y;
                        render();
                    },
                    get x() {
                        return link.end.x;
                    },

                    get y() {
                        return link.end.y;
                    }
                };
            },

            get endPosition() {
                return {
                    set x(x) {
                        link.end.x = x;
                        render();
                    },
                    set y(y) {
                        link.end.y = y;
                        render();
                    },
                    get x() {
                        return link.end.x;
                    },

                    get y() {
                        return link.end.y;
                    }
                };
            }
        };
    }

    set pointer(bool) {
        this.isPointer = !!bool;
        this.link.pointer = this.isPointer;
    }
}
