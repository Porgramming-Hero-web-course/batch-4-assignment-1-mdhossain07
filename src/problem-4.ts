type TShapes = Circle | Rectangle;

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
}

type Circle = {
    shape: 'circle';
    radius: number;
}

const PI_VALUE = 3.1416;

const calculateShapeArea  =(param: TShapes) => {
    if(param.shape === 'circle') {
        return PI_VALUE * param.radius * param.radius;
    }
    else {
        return param.height * param.width
    }
}

calculateShapeArea({ shape: "circle", radius: 5 })