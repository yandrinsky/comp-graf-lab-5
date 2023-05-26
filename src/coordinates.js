export const renderCoordinates = ({ CNV }) => {
    //xLine
    CNV.createLine({
        x0: window.innerWidth / 2,
        y0: window.innerHeight / 2,
        x1: window.innerWidth / 2 + 500,
        y1: window.innerHeight / 2
    });

    CNV.createText({
        x0: window.innerWidth / 2 + 510,
        y0: window.innerHeight / 2 + 3,
        text: 'x',
        className: 'lineText'
    });

    //yLine
    CNV.createLine({
        x0: window.innerWidth / 2,
        y0: window.innerHeight / 2,
        x1: window.innerWidth / 2,
        y1: window.innerHeight / 2 - 420
    });

    CNV.createText({
        x0: window.innerWidth / 2 - 30,
        y0: window.innerHeight / 2 - 410,
        text: 'y',
        className: 'lineText'
    });

    //zLine
    CNV.createLine({
        x0: window.innerWidth / 2,
        y0: window.innerHeight / 2,
        x1: window.innerWidth / 2 - 300,
        y1: window.innerHeight / 2 + 300
    });

    CNV.createText({
        x0: window.innerWidth / 2 - 320,
        y0: window.innerHeight / 2 + 320,
        text: 'z',
        className: 'lineText'
    });
};
