"use strict";
const PI_VALUE = 3.1416;
const calculateShapeArea = (param) => {
    if (param.shape === 'circle') {
        return PI_VALUE * param.radius * param.radius;
    }
    else {
        return param.height * param.width;
    }
};
calculateShapeArea({ shape: "circle", radius: 5 });
