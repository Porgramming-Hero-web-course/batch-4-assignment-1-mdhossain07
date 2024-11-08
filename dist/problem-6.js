"use strict";
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
const updateProfile = (obj, property) => {
    return Object.assign(Object.assign({}, obj), property);
};
updateProfile(myProfile, { age: 26 });
