import {
    draw_connected_full_view,
    draw_connected_full_view_proportional,
    draw_points_full_view_proportional,
    draw_points_full_view,
    unit_line,
    unit_circle,
    make_point,
    make_color_point,
    x_of,
    y_of,
    z_of,
    rotate_around_origin,
    draw_points
} from "curve";

const n = 685;

function getColour(index, channel) {
    return parse_int(char_at(data, index * 6 + channel * 2) + 
        char_at(data, index * 6 + channel * 2 + 1), 16);
}

function draw(t) {
    const x = math_random();
    const y = math_random();
    const p = math_trunc(x * n);
    const q = math_trunc(y * n);
    const i = n * q + p;
    return make_color_point(x, y, getColour(i, 0), getColour(i, 1), getColour(i, 2)); 
}

display(0);
draw_points(1000000)(draw);