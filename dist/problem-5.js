"use strict";
const getProperty = (obj, key) => {
    return obj[key];
};
const person = {
    name: 'Alice',
    age: 28
};
getProperty(person, 'name');
