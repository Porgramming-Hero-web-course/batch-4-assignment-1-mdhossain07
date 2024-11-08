const getProperty = <T, X extends keyof T>(obj: T, key: X) => {
    return obj[key]
}

type TPerson ={
    name: string;
    age: number
}

const person : TPerson= {
    name: 'Alice',
    age: 28
}
getProperty<TPerson, 'name'>(person, 'name')