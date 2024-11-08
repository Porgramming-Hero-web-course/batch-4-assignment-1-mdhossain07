const sumArray = (params:number[]) :number=> {
    return params.reduce((prev, current) => prev + current, 0)
}

sumArray([1, 2, 3, 4, 5])


