import Store from '../../Store';
import mousePosition from './mousePosition';

function selfEvent(e, target) {
    let state = Store.getState();
    let [clientX, clientY] = mousePosition(e);

    return {
        clientY: clientY,
        clientX: clientX,
        altKey: e.altKey,
        button: e.button,
        ctrlKey: e.ctrlKey,
        layerX: e.layerX,
        layerY: e.layerY,
        movementX: e.movementX,
        movementY: e.movementY,
        currentTarget: e.currentTarget,
        offsetX: e.offsetX,
        offsetY: e.offsetY,
        pageX: e.pageX,
        pageY: e.pageY,
        x: e.x - state.shift.x,
        y: e.y - state.shift.y,
        which: e.which,
        target,
        shiftKey: e.shiftKey
    };
}

export default selfEvent;
