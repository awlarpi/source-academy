import {
    blank,
    circle,
    corner,
    heart,
    nova,
    pentagram,
    rcross,
    ribbon,
    sail,
    square,
    triangle
} from "rune";
import {
    black,
    blue,
    brown,
    color,
    green,
    indigo,
    orange,
    pink,
    purple,
    random_color,
    red,
    white,
    yellow
} from "rune";
import {
    anaglyph,
    animate_anaglyph,
    animate_rune,
    beside,
    beside_frac,
    flip_horiz,
    flip_vert,
    from_url,
    hollusion,
    hollusion_magnitude,
    make_cross,
    overlay,
    overlay_frac,
    quarter_turn_left,
    quarter_turn_right,
    repeat_pattern,
    rotate,
    scale,
    scale_independent,
    show,
    stack,
    stack_frac,
    stackn,
    translate,
    turn_upside_down
} from "rune";

const arr = (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35, v36, v37) => (f) => f(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35, v36, v37);
const first = (p) => p((v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35, v36, v37) => x1);
const discard = (p) =>
    p((v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35, v36, v37) => (f) => f(v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35, v36, v37, false));

// 37 x 37

const size = 5;
const shape = heart;

const getShape = (v) => v === 1 ? shape : blank;

const addRune = (n, row, val) => 
    beside_frac((n - 1) / n, row, getShape(val));
    
const stackRow = (rune, nRows, newRow) => 
    stack_frac((nRows - 1) / nRows, rune, newRow);

function makeRow(vArr) {
    function makeRowIter(vArr, accum, count) {
        return count > size
            ? accum
            : makeRowIter(
                    discard(vArr), 
                    addRune(count, accum, first(vArr)), 
                    count + 1
                );
    }
    return makeRowIter(vArr, getShape(first(vArr)), 1);
}
    
function makeArt(rvArr) {
    function makeArtIter(rvArr, accum, count) {
        return count > size
            ? accum
            : makeArtIter(
                    discard(rvArr), 
                    stackRow(accum, count, makeRow(first(rvArr))),
                    count + 1
                );
    }
    return makeArtIter(rvArr, makeRow(first(rvArr)), 1);
}

const rvArr = arr(
    arr(1, 0, 1, 0, 1), 
    arr(0, 1, 0, 1, 0), 
    arr(1, 0, 1, 0, 1), 
    arr(0, 1, 0, 1, 0), 
    arr(1, 0, 1, 0, 1)
);

show(makeArt(rvArr));
